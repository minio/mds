// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import DataTable from "./DataTable";
import { DataTableProps } from "./DataTable.types";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Grid from "../Grid/Grid";

export default {
  title: "MDS/Information/DataTable",
  component: DataTable,
  argTypes: {},
} as Meta<typeof DataTable>;

const Template: Story<DataTableProps> = (args) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(["field1"]);

  const onSelectFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetD = e.target;
    const value = targetD.value;
    const checked = targetD.checked;

    let elements: string[] = [...selected]; // We clone the selected array

    if (checked) {
      // If the user has checked this field we need to push this to elements selection list
      elements.push(value);
    } else {
      // User has unchecked this field, we need to remove it from the list
      elements = elements.filter((element) => element !== value);
    }

    setSelected(elements);
  };

  const onSelectAllFunction = () => {
    if (selected.length === args.records.length) {
      setSelected([]);
      return;
    }

    const allItems = args.records.map(
      (element) => `${element[`${args.idField}`]}`
    );
    setSelected(allItems);
  };

  let extraFunc = {};

  if (args.onSelect !== undefined) {
    extraFunc = {
      selectedItems: selected,
      onSelect: onSelectFunction,
      onSelectAll: onSelectAllFunction,
    };
  }

  if (args.columnsSelector) {
    extraFunc = {
      ...extraFunc,
      columnsShown: selectedColumns,
      onColumnChange: (columnKey) => {
        const itemFound = selectedColumns.findIndex(
          (item) => item === columnKey
        );

        // Item Exists, we remove it
        if (itemFound >= 0) {
          setSelectedColumns(
            selectedColumns.filter((item) => item !== columnKey)
          );
        } else {
          setSelectedColumns([...selectedColumns, columnKey]);
        }
      },
    };
  }

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Grid container>
        <Grid item xs={12}>
          <DataTable {...args} {...extraFunc} />
        </Grid>
      </Grid>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  entityName: "Elements",
  records: ["Element1", "Element2", "Element3"],
  columns: [{ label: "Elements List" }],
  onSelect: undefined,
};

export const MultiColumn = Template.bind({});
MultiColumn.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
    { field1: "Value1-2", field2: "Value2-2", field3: "Value3-2" },
    {
      field1: "Value1-3",
      field2: "Value2-3",
      field3: "Value3-3",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1" },
    { label: "Column2", elementKey: "field2" },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
};

export const CustomColumnsWidth = Template.bind({});
CustomColumnsWidth.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1", width: 200 },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
};

export const CustomRowStyle = Template.bind({});
CustomRowStyle.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1", width: 200 },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
  rowStyle: ({ index }) => (index === 1 ? "deleted" : ""),
};

export const NoBackground = Template.bind({});
NoBackground.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  noBackground: true,
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1", width: 200 },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
};

export const CustomPaperHeight = Template.bind({});
CustomPaperHeight.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  customPaperHeight: "250px",
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1", width: 200 },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  customPaperHeight: "250px",
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1", width: 200 },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
  sx: {
    backgroundColor: "#f09",
    color: "#fff",
  },
};

export const WithSortIndicators = Template.bind({});
WithSortIndicators.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  customPaperHeight: "250px",
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
  ],
  columns: [
    {
      label: "Super Long Column Name to test ellipsis truncate",
      elementKey: "field1",
      width: 200,
    },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
  sortConfig: {
    currentSort: "field1",
    currentDirection: "DESC",
    triggerSort: () => {
      alert("sort triggered");
    },
  },
};

export const WithItemActions = Template.bind({});
WithItemActions.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  customPaperHeight: "250px",
  itemActions: [
    {
      type: "edit",
      onClick: (itemID: string) => {
        alert(itemID);
      },
      sendOnlyId: true,
      label: "Edit",
    },
    {
      type: "delete",
      onClick: (deleteItem) => {
        console.log("DELETE", deleteItem);
      },
      label: "Delete",
    },
  ],
  records: [
    { field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1", width: 200 },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
  sortConfig: {
    currentSort: "field1",
    currentDirection: "DESC",
    triggerSort: () => {
      alert("sort triggered");
    },
  },
};

export const ColumnsSelector = Template.bind({});
ColumnsSelector.args = {
  disabled: false,
  entityName: "Elements",
  idField: "field1",
  customPaperHeight: "250px",
  columnsSelector: true,
  itemActions: [
    {
      type: "edit",
      onClick: (itemID: string) => {
        alert(itemID);
      },
      sendOnlyId: true,
      label: "Edit",
    },
    {
      type: "delete",
      onClick: (deleteItem) => {
        console.log("DELETE", deleteItem);
      },
      label: "Delete",
    },
  ],
  records: [
    {
      field1: "Value1",
      field2: "Value2",
      field3: "Value3",
      field4: "Value4",
      field5: "Value5",
      field6: "Value6",
      field7: "Value7",
      field8: "Value8",
      field9: "Value9",
      field10: "Value10",
      field11: "Value11",
      field12: "Value12",
    },
    {
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
      field4: "Value4-1",
      field5: "Value5-1",
      field6: "Value6-1",
      field7: "Value7-1",
      field8: "Value8-1",
      field9: "Value9-1",
      field10: "Value10-1",
      field11: "Value11-1",
      field12: "Value12-1",
    },
  ],
  columns: [
    { label: "Column1", elementKey: "field1", width: 200 },
    { label: "Column2", elementKey: "field2", width: 100 },
    {
      label: "Column3",
      elementKey: "field3",
    },
    { label: "Column4", elementKey: "field4", width: 200 },
    { label: "Column5", elementKey: "field5", width: 100 },
    {
      label: "Column6",
      elementKey: "field6",
    },
    { label: "Column7", elementKey: "field7", width: 200 },
    { label: "Column8", elementKey: "field8", width: 100 },
    {
      label: "Column9",
      elementKey: "field9",
    },
    { label: "Column10", elementKey: "field10", width: 200 },
    { label: "Column11", elementKey: "field11", width: 100 },
    {
      label: "Column12",
      elementKey: "field12",
    },
  ],
};

export const NumericIDs = Template.bind({});
NumericIDs.args = {
  disabled: false,
  entityName: "Elements",
  idField: "id",
  records: [
    { id: 1, field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      id: 2,
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
    { id: 3, field1: "Value1-2", field2: "Value2-2", field3: "Value3-2" },
    {
      id: 4,
      field1: "Value1-3",
      field2: "Value2-3",
      field3: "Value3-3",
    },
  ],
  columns: [
    { label: "ID", elementKey: "id" },
    { label: "Column1", elementKey: "field1" },
    { label: "Column2", elementKey: "field2" },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
};

export const LongTitles = Template.bind({});
LongTitles.args = {
  disabled: false,
  entityName: "Elements",
  idField: "id",
  records: [
    { id: 1, field1: "Value1", field2: "Value2", field3: "Value3" },
    {
      id: 2,
      field1: "Value1-1",
      field2: "Value2-1",
      field3: "Value3-1",
    },
    { id: 3, field1: "Value1-2", field2: "Value2-2", field3: "Value3-2" },
    {
      id: 4,
      field1: "Value1-3",
      field2: "Value2-3",
      field3: "Value3-3",
    },
  ],
  columns: [
    { label: "ID", elementKey: "id" },
    {
      label: "Super long title name for a single column that needs to truncate",
      elementKey: "field1",
    },
    { label: "Column2", elementKey: "field2" },
    {
      label: "Column3",
      elementKey: "field3",
    },
  ],
};
