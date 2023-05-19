import * as React from 'react';

interface IProps {
	className?: string;
	header?: JSX.Element;
	title?: string;
	// chindren contains 2 elements
	children: JSX.Element[];
}

const PbTable: React.FC<IProps> = (props) => {
	return (
		<div className='table-responsive'>
			<table
				className={['table table-bordered table-hover dataTables-example dataTable', props.className].join(' ')}
			>
				{/** first children must be Table Head */}
				{props.children[0]}
				{/** second children must be Table Body */}
				{props.children[1]}
			</table>
		</div>
	);
};

interface ITableTitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
}

const TableTitle = (props: ITableTitleProps) => (
	<div className={[props.className, 'ibox-title'].join(' ')}>
		<h6 data-testid='module-title'>
			{props.title}
		</h6>
		<div className='justify-content--space-between'>{props.children}</div>
	</div>
);

export default PbTable;

export { TableTitle };
