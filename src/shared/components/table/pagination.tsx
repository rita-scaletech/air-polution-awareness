import React from 'react';
import { IPagination } from 'shared/interface';


interface IPaginationProps {
	pagination: IPagination;
	handlePageClick: (page: number) => void;
	handlePageSelection: (perPage: number) => void;
	hidePerPage?: boolean;
	loading?: boolean;
}

// maximum number of pages per pagination
const maxPages = 10;
const pageOptions: number[] = [10, 15, 25, 50, 100];

const TablePagination: React.FC<IPaginationProps> = (props) => {
	const { loading, hidePerPage, pagination, handlePageClick, handlePageSelection } = props;
	const { currentPage, recordPerPage, total, totalPages } = pagination;
	// total number of paginations available
	// so, let's say props.totalPages = 17
	// that means pagination must be divided into 2 parts => 1 to 10, and 11 to 17
	// so `totalPaginations` = Math.ceil(17 / 10) = 2
	const totalPaginations = Math.ceil(totalPages / maxPages);
	// currentPagination is the pagination that user is currently on
	// pagination is divided in 2 parts => 1to 10, and 11 to 17
	// let's say user's current page is 11 out of total 17 pages,
	// so user must be on 2nd(1st, as array index starts from 0) pagination (11 to 17)
	// so, formula for getting user's currentPagination = Math.ceil(11 / 10) - 1 = 2 - 1 => 1
	const currentPagination = Math.ceil(pagination.currentPage / maxPages) - 1;
	// determine last page to show in pagination
	// let lastPage = maxPages * (currentPagination + 1);
	// if (totalPages < lastPage) {
	// 	lastPage = totalPages;
	// }

	// jsx to render page numbers
	const pages: JSX.Element[] = [];
	// show pages in 10-10 batches
	// when user's currentpage = 1, show 1 to 10 pages
	// when user's currentpage = 11, show 11 to 20 pages
	// when user's currentpage = 23, show 21 to 30 pages, and so on...
	for (let page = currentPagination * maxPages + 1; page <= totalPages; page += 1) {
		pages.push(
			<button
				onClick={() => page !== currentPage && handlePageClick(page)}
				key={page}
				disabled={loading}
				className={`btn btn-white pagination-btn ${currentPage === page ? 'pagination-active' : ''}`}
			>
				{page}
			</button>
		);
	}

	return (
		<div
			className='table-pagination-wrapper d--flex justify-content--space-between align-items--center'
			data-testid='pagination'
		>
			<div>
				{hidePerPage ? null : (
					<div className='page-selection'>
						<select
							className='form-control'
							disabled={loading}
							value={recordPerPage}
							onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
								handlePageSelection(parseInt(e.target.value));
							}}
						>
							{pageOptions.map((page) => {
								return (
									<option key={page} value={page}>
										{page}
									</option>
								);
							})}
						</select>
					</div>
				)}
				<div className='btn-group'>
					<button
						disabled={currentPage === 1}
						onClick={() => handlePageClick(1)}
						className='btn btn-white'
						type='button'
					>
						{'<<<'}
					</button>
					<button
						disabled={currentPage === 1}
						onClick={() => handlePageClick((currentPagination - 1) * maxPages + 1)}
						className='btn btn-white'
						type='button'
					>
						{'<<'}
					</button>
					{pages}
					<button
						onClick={() => handlePageClick((currentPagination + 1) * maxPages + 1)}
						disabled={currentPagination === totalPaginations - 1 || props.loading}
						className='btn btn-white'
						type='button'
					>
						{'>>'}
					</button>
					<button
						onClick={() => handlePageClick(totalPages)}
						disabled={currentPagination === totalPaginations - 1 || props.loading}
						className='btn btn-white'
						type='button'
					>
						{'>>>'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default TablePagination;
