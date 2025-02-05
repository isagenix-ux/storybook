import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from '@mui/x-data-grid';

const meta = {
  title: 'MUI/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
  argTypes: {
    autoHeight: {
      description: 'If true, the grid height will automatically expand to accommodate all rows',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    checkboxSelection: {
      description: 'If true, the grid will show checkboxes for row selection',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableColumnFilter: {
      description: 'If true, column filtering will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableColumnMenu: {
      description: 'If true, column menus will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableColumnSelector: {
      description: 'If true, column selector will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableDensitySelector: {
      description: 'If true, density selector will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disableRowSelectionOnClick: {
      description: 'If true, row selection on click will be disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      description: 'If true, the grid will show a loading overlay',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    pageSizeOptions: {
      description: 'Available page size options',
      control: 'array',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[10, 25, 50, 100]' },
      },
    },
    density: {
      description: 'Sets the density of the grid',
      options: ['compact', 'standard', 'comfortable'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
  },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof DataGrid>;

// Sample data
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column is calculated from firstName and lastName',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
];

export const Basic: Story = {
  args: {
    rows,
    columns,
    initialState: {
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    },
    pageSizeOptions: [5, 10],
  },
};

export const WithCheckboxSelection: Story = {
  args: {
    ...Basic.args,
    checkboxSelection: true,
  },
};

export const Loading: Story = {
  args: {
    ...Basic.args,
    loading: true,
  },
};

export const CustomDensity: Story = {
  args: {
    ...Basic.args,
    density: 'compact',
  },
};

export const Filtered: Story = {
  args: {
    ...Basic.args,
    initialState: {
      ...Basic.args.initialState,
      filter: {
        filterModel: {
          items: [{ field: 'age', operator: '>', value: '30' }],
        },
      },
    },
  },
}; 