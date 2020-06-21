import { ProColumns } from '@ant-design/pro-table';
import React, { FC } from 'react';
import { formatMessage } from 'umi-plugin-react/locale';

import { Letter, fetchLettersPage } from '@/services/letters';
import Table from '@/components/Table';

import { CaseName } from '@/components/Table/CaseName';
import { InstitutionName } from '@/components/Table/InstitutionName';

const TableList: FC<{}> = () => {
  const columns: ProColumns<Letter>[] = [
    {
      title: formatMessage({ id: 'letters-list.table.columns.identifier.title' }),
      dataIndex: 'identifier',
    },
    {
      title: formatMessage({ id: 'letters-list.table.columns.comment.title' }),
      dataIndex: 'comment',
    },
    {
      title: formatMessage({ id: 'letters-list.table.columns.direction.title' }),
      dataIndex: 'direction',
      render: (direction: string) =>
        formatMessage({ id: `letters-list.table.direction.${direction.toLowerCase()}` }),
    },
    {
      title: formatMessage({ id: 'letters-list.table.columns.case.title' }),
      dataIndex: 'case',
      render: (_case: number) => (typeof _case === 'number' ? <CaseName id={_case} /> : _case),
    },
    {
      title: formatMessage({ id: 'letters-list.table.columns.audited_institutions.title' }),
      dataIndex: 'institution',
      render: (institution: number) => <InstitutionName id={institution} />,
    },
    {
      title: formatMessage({ id: 'letters-list.table.columns.createdOn.title' }),
      dataIndex: 'createdOn',
      render: createdOn => createdOn.toLocaleString(),
    },
    {
      title: formatMessage({ id: 'letters-list.table.columns.modifiedOn.title' }),
      dataIndex: 'modifiedOn',
      render: modifiedOn => modifiedOn.toLocaleString(),
    },
    {
      title: formatMessage({ id: 'letters-list.table.columns.attachment.title' }),
      dataIndex: 'attachment',
      render: (attachment: []) => attachment.length,
    },
  ];

  return <Table type="letters" columns={columns} fetchData={fetchLettersPage} />;
};

export default TableList;
