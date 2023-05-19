import React from 'react';

import PbHead from './PbHead';
import PbRow from './PbRow';
import AdvancedPbHead from './AdvancedPbHead';
import { ITableCell } from 'shared/interface';

interface ITableHeadProps {
	tableCellList: ITableCell[];
	order: boolean;
	orderBy: string;
	handleSort: (column: string) => void;
}

const AdvanceTableHead: React.FC<ITableHeadProps> = ({ tableCellList, order, orderBy, handleSort }) => {
	return (
		<PbHead>
			<PbRow>
				{tableCellList.map(({ title, sortable, key, style }, index) => (
					<AdvancedPbHead
						key={index}
						order={order}
						orderBy={orderBy}
						style={style}
						onSort={handleSort}
						column={{ sort: sortable, name: key as string }}
						className='table-title'
						title={title}
					/>
				))}
			</PbRow>
		</PbHead>
	);
};

export default AdvanceTableHead;
