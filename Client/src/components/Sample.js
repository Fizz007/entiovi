import React, { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css"; // Import the default Kendo UI theme
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";



const Sample = ({data}) => {
  
  const [dataState, setDataState] = useState({
    skip: 0,
    take: 5,
    sort: [
      {
        field: "id",
        dir: "asc",
      },
    ],
  });

  const [dataResult, setDataResult] = useState(process(data, dataState));
  const dataStateChange = (event) => {
    setDataResult(process(data, event.dataState));
    setDataState(event.dataState);
  };

  return (
    <div className="outer">
      <div className="inner">
        <Grid
         
          sortable={true}
          filterable={true}
          groupable={true}
          reorderable={true}
          pageable={{
            buttonCount: 4,
            pageSizes: true,
          }}
          data={dataResult}
          {...dataState}
          onDataStateChange={dataStateChange}   
    
         
        >
          <GridColumn field="id" title="ID" />
          <GridColumn field="name" title="Name" />
          <GridColumn field="age" title="Age" />
          <GridColumn field="hobbies" title="Hobbies" />
        </Grid>
      </div>
    </div>
  );
};

export default Sample;
