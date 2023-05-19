export interface IResponseObject<T> {
	isError: boolean;
	message: string;
	data: T;
}

export interface IObj {
	[key: string]: string | number;
}

export interface ITableCell {
	title: string;
	style: IObj;
	key?: string;
	sortable?: boolean;
}

export interface IPagination {
	currentPage: number;
	nextPage: number | null;
	recordPerPage: number;
	remainingCount: number;
	total: number;
	totalPages: number;
}
