export interface LanguagesResponse {
	data: Datum[];
}

export interface Datum {
	color: string;
	name: string;
	percent: number;
}
