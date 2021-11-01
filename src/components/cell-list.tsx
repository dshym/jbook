import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ data, order }) => {
    return order.map((id) => data[id]);
  });
  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem key={cell.id} cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <div className={cells.length === 0 ? 'force-visible' : ''}>
        <AddCell previousCellId={null} />
      </div>
      {renderedCells}
    </div>
  );
};

export default CellList;