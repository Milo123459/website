import Image from 'next/image';
import React, { Fragment } from 'react';
import Link from './Link';

function InlineText(props: {
	children: React.ReactNode;
	description?: boolean;
}) {
	if (props.description) {
		return (
			<span className="grow-0 break-words text-[14px] dark:text-neutral-300">
				{props.children}
			</span>
		);
	} else {
		return (
			<span className="grow-0 break-words dark:text-neutral-300">
				{props.children}
			</span>
		);
	}
}

export default function Card(props: {
	loading?: boolean;
	avatar?: string;
	title?: string;
	description?: string;
	links?: { text: string; href: string }[];
	statusText?: React.ReactNode;
}) {
	if (props.loading) {
		return (
			<div className="max-w-sm rounded-md border border-blue-500 p-4 shadow dark:border-blue-300">
				<div className="flex animate-pulse flex-wrap space-x-4">
					<div className="h-10 w-10 rounded-full bg-slate-700"></div>
					<div className="flex-1 space-y-6 py-1">
						<div className="h-2 rounded bg-slate-700"></div>
						<div className="space-y-3">
							<div className="grid grid-cols-3 gap-4">
								<div className="col-span-2 h-2 rounded bg-slate-700"></div>
								<div className="col-span-1 h-2 rounded bg-slate-700"></div>
							</div>
							<div className="h-2 rounded bg-slate-700"></div>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="mx-auto w-full max-w-sm rounded-md border border-blue-500 p-4 shadow dark:border-blue-300">
				<div className="flex space-x-4">
					<div className="shrink-0 rounded-full">
						<Image
							src={props.avatar}
							height={'40px'}
							width={'40px'}
							className="shrink-0 rounded-full"
							alt="avatar"
						/>
					</div>
					<div className="w-full flex-1 space-y-1 py-1">
						<div className="max-w-[280px] rounded text-left">
							<InlineText>{props.title}</InlineText>
						</div>
						{props.statusText ? (
							<div className="max-w-[280px] rounded py-0.5 text-left text-sm text-gray-700 dark:text-neutral-300">
								{props.statusText}
							</div>
						) : null}
						<div className="max-w-[280px] rounded text-left">
							<InlineText description>{props.description}</InlineText>
						</div>
						<div className="space-x-1 rounded text-left">
							{props.links.map((link, index) => {
								const should_render_line = index !== props.links.length - 1;
								const first_element = index === 0;
								if (should_render_line) {
									return (
										<Fragment key={link.href}>
											<Link href={link.href}>{link.text}</Link>
											<span className="text-gray-700 dark:text-white">|</span>
											{first_element ? <span className="space-x-1" /> : null}
										</Fragment>
									);
								} else {
									return (
										<Fragment key={link.href}>
											<Link href={link.href}>{link.text}</Link>
											{first_element ? <span className="space-x-1" /> : null}
										</Fragment>
									);
								}
							})}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
