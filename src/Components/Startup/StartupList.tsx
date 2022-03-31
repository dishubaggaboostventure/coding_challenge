import { Card, CardContent, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { Startup } from "../../Types/Startup";

export default function StartupList(): ReactElement {
  const [startupList, setStartupList] = useState<Startup[]>([]);
  
  useEffect(()=> {
    getStartupList();
  }, [])

  const getStartupList = () => {
    StartupHttpService.getAllStartups().then((startUpList: Startup[])=> {
      setStartupList(startUpList)
    })
    .catch((err: Error) => {
      console.log(err);
    })
  }

  return ( 
    <div> 
      {
        startupList.map((startup: Startup) => {
          return (
          <Card sx={{ minWidth: 275, marginBottom: '20px' }} key={startup.id}>
            <CardContent>
            <Typography variant="h5" component="div">
              {startup.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" noWrap>
             Founded: {startup.dateFounded.getFullYear()} | {startup.employees} Employees | {startup.totalFunding} $ | {startup.currentInvestmentStage}
            </Typography>
            <Typography variant="body2">
               {startup.shortDescription}
            </Typography>
            </CardContent>
          </Card>
          )
        })
      }  
    </div>
  );
}
