import React from 'react';
import PbCell from './PbCell';
import { ShortingIcon } from '../icons/icons';
import { IObj } from 'shared/interface';

interface IColumn {
	name: string;
	sort?: boolean;
}

interface IProps
	extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement> {
	column: IColumn;
	orderBy: string | null;
	order: boolean | null;
	style: IObj;
	title?: string;
	onSort?: (column: string) => void;
}

class AdvancedPbHead extends React.Component<IProps> {
	render() {
		return (
			<PbCell
				className={[this.props.className, this.getCellClasses(this.props.column)].join(' ')}
				header={true}
				style={this.props.style}
			>
				<div className='flex-space--between'>
					{this.props.title}
					<div onClick={() => this.onClickCell(this.props.column)}>
						{this.props.column.sort && <ShortingIcon className='ml--10' />}
					</div>
				</div>
			</PbCell>
		);
	}

	onClickCell = (column: IColumn) => {
		if (!column.sort) {
			return;
		}
		this.props.onSort && this.props.onSort(column.name);
	};

	getCellClasses = (column: IColumn): boolean | null => {
		if (!column.sort) {
			return false;
		}
		if (column.sort && this.props.orderBy === column.name) {
			return this.props.order;
		} else {
			return null;
		}
	};
}

export default AdvancedPbHead;
