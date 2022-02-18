import { NextScript } from 'next/document';

function dedupe<T extends string>(bundles: T[]): T[] {
	const files = new Set<string>();
	const kept: T[] = [];

	for (const bundle of bundles) {
		if (files.has(bundle)) continue;
		files.add(bundle);
		kept.push(bundle);
	}
	return kept;
}

type DocumentFiles = {
	sharedFiles: readonly string[];
	pageFiles: readonly string[];
	allFiles: readonly string[];
};

/**
 * Custom NextScript to defer loading of unnecessary JS.
 * Standard behavior is async. Compatible with Next.js 10.0.3
 */
class DeferNextScript extends NextScript {
	getDynamicChunks(files: DocumentFiles) {
		const {
			dynamicImports,
			assetPrefix,
			isDevelopment,
			devOnlyCacheBusterQueryString,
		} = this.context;

		return dedupe(dynamicImports).map((bundle) => {
			if (!bundle.endsWith('.js') || files.allFiles.includes(bundle))
				return null;

			return (
				<script
					defer={!isDevelopment}
					key={bundle}
					src={`${assetPrefix}/_next/${encodeURI(
						bundle
					)}${devOnlyCacheBusterQueryString}`}
					nonce={this.props.nonce}
					crossOrigin={
						this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
					}
				/>
			);
		});
	}
	getScripts(files: DocumentFiles) {
		const {
			assetPrefix,
			buildManifest,
			isDevelopment,
			devOnlyCacheBusterQueryString,
		} = this.context;

		const normalScripts = files.allFiles.filter((file) => file.endsWith('.js'));
		const lowPriorityScripts = buildManifest.lowPriorityFiles?.filter((file) =>
			file.endsWith('.js')
		);

		return [...normalScripts, ...lowPriorityScripts].map((file) => {
			return (
				<script
					key={file}
					src={`${assetPrefix}/_next/${encodeURI(
						file
					)}${devOnlyCacheBusterQueryString}`}
					nonce={this.props.nonce}
					defer={!isDevelopment}
					crossOrigin={
						this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
					}
				/>
			);
		});
	}
}

export default DeferNextScript;
