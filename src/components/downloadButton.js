import React from 'react';
import download from 'downloadjs';
import GetAppIcon from '@material-ui/icons/GetApp';

export default function DownloadButton(props) {
    const sleepData = props.data;
    const movementData =props.movementData;
    
    function downloadFile() {
        if (sleepData && movementData) {
            let userRow = [];
            let sleepRow = [];
            let timeRow = [];
            sleepData.forEach(function (row) {
                userRow.push(row.user);
                sleepRow.push(row.sleep);
                timeRow.push(`${row.timeStamp.date} ${row.timeStamp.month} ${row.timeStamp.time} ${row.timeStamp.year}`)
            })
            let moveUserRow = [];
            let moveTimeRow = [];
            movementData.forEach(function (row) {
                moveUserRow.push(row.user)
                moveTimeRow.push(`${row.timeStamp.date} ${row.timeStamp.month} ${row.timeStamp.time} ${row.timeStamp.year}`)
            })
            let dataArray = [userRow, ['X'], sleepRow, ['XX'], timeRow, ['XXX'], moveUserRow, ['XXXX'], moveTimeRow]
            let csvContent = "data:text/csv;charset=utf-8," + dataArray.map(e => e.join(", \n"));

            download(csvContent, "dezzySleepData.csv", 'csv');
        }
    }

    return (
            <div onClick={() => downloadFile()}><GetAppIcon/></div>
    )

}