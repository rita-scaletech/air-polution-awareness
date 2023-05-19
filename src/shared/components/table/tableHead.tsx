import React from 'react';
import PbHead from './PbHead';
import PbRow from './PbRow';
import PbCell from './PbCell';
import { ITableCell } from 'shared/interface';

interface ITableHeadProps {
	tableCellList: ITableCell[];
}

const TableHead: React.FC<ITableHeadProps> = ({ tableCellList }) => (
	<PbHead>
		<PbRow>
			{tableCellList.map(({ title }, index) => {
				return (
					<PbCell key={index} className='table-title'>
						{title}
					</PbCell>
				);
			})}
		</PbRow>
	</PbHead>
);

export default TableHead;
