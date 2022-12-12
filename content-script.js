window.onload = function(){
    setTimeout(() => {

        var playersTable = (document.getElementsByClassName("Table Table--align-right Table--fixed Table--fixed-left")["0"])
        var statsTable = (document.getElementsByClassName("Table Table--align-right")["1"])

        var minutes = document.getElementsByClassName("jsx-2810852873 table--cell stat-min tar");
        var fieldGoalAttemps = document.getElementsByClassName("jsx-2810852873 table--cell stat-fgm/fga tar");
        var freeThrowAttemps = document.getElementsByClassName("jsx-2810852873 table--cell stat-ftm/fta tar");
        var trheePointsMade = document.getElementsByClassName("jsx-2810852873 table--cell stat-3pm tar");
        var rebounds = document.getElementsByClassName("jsx-2810852873 table--cell stat-reb tar");
        var assists = document.getElementsByClassName("jsx-2810852873 table--cell stat-ast tar");
        var steals = document.getElementsByClassName("jsx-2810852873 table--cell stat-stl tar");
        var blocks = document.getElementsByClassName("jsx-2810852873 table--cell stat-blk tar");
        var turnOvers = document.getElementsByClassName("jsx-2810852873 table--cell stat-to tar");
        var points = document.getElementsByClassName("jsx-2810852873 table--cell stat-pts tar");

        var benchsPlayers = document.querySelectorAll('[title="Bench"]');
        
        
        function getAvgStat(stat,fixed, benchsPlayersAmmount){
            var avgStat = 0;
            for(let i=1; i<stat.length-benchsPlayersAmmount; i++){
                if(stat[i].innerText != "--"){
                    avgStat += parseFloat(stat[i].innerText);                
                }
                
            }
            avgStat = avgStat/(stat.length-(benchsPlayersAmmount+1));           
            return avgStat.toFixed(fixed);
            // return Math.round((avgStat + Number.EPSILON) *100)/100;
        }

        function getAttemps(stat, type, benchsPlayersAmmount){
            var avgStat = 0
            for(let i=1; i<stat.length-benchsPlayersAmmount; i++){
                if(stat[i].innerText != "--/--"){
                    avgStat += parseFloat(stat[i].innerText.split('/')[type])
                }    
            }
            avgStat = avgStat/(stat.length-(benchsPlayersAmmount+1));
            // return avgStat.toFixed(1);
            return Math.round((avgStat + Number.EPSILON) *100)/100;
        }
        
        var avgMinutes = getAvgStat(minutes,1, benchsPlayers.length);  
        var avgFGMade = getAttemps(fieldGoalAttemps,0, benchsPlayers.length);
        var avgFGAttempted = getAttemps(fieldGoalAttemps,1, benchsPlayers.length);
        var avgFTMade = getAttemps(freeThrowAttemps,0, benchsPlayers.length);
        var avgFTAttempted = getAttemps(freeThrowAttemps,1, benchsPlayers.length);  
        var avg3PM = getAvgStat(trheePointsMade, 1, benchsPlayers.length);
        var avgRebounds = getAvgStat(rebounds, 1, benchsPlayers.length);
        var avgAssists = getAvgStat(assists, 1, benchsPlayers.length);
        var avgSteals = getAvgStat(steals, 1, benchsPlayers.length);
        var avgBlocks = getAvgStat(blocks, 1, benchsPlayers.length);
        var avgTO = getAvgStat(turnOvers, 1, benchsPlayers.length);
        var avgPoints = getAvgStat(points, 1, benchsPlayers.length);

        var avgMinutesTotal = getAvgStat(minutes,1, 0);  
        var avgFGMadeTotal = getAttemps(fieldGoalAttemps,0, 0);
        var avgFGAttemptedTotal = getAttemps(fieldGoalAttemps,1, 0);
        var avgFTMadeTotal = getAttemps(freeThrowAttemps,0, 0);
        var avgFTAttemptedTotal = getAttemps(freeThrowAttemps,1, 0);  
        var avg3PMTotal = getAvgStat(trheePointsMade, 1, 0);
        var avgReboundsTotal = getAvgStat(rebounds, 1, 0);
        var avgAssistsTotal = getAvgStat(assists, 1, 0);
        var avgStealsTotal = getAvgStat(steals, 1, 0);
        var avgBlocksTotal = getAvgStat(blocks, 1, 0);
        var avgTOTotal = getAvgStat(turnOvers, 1, 0);
        var avgPointsTotal = getAvgStat(points, 1, 0);

        var playersRow = playersTable.insertRow(12);
        var cell1 = playersRow.insertCell(0);
        cell1.innerHTML = "AVG";

        var playersRowTotal = playersTable.insertRow(16);
        var cell1Total = playersRowTotal.insertCell(0);
        cell1Total.innerHTML = "AVG Total";

        var statsRow = statsTable.insertRow(12);
        var minutesCell = statsRow.insertCell(0);
        var fgaCell = statsRow.insertCell(1);
        var fgCell = statsRow.insertCell(2);
        var ftaCell = statsRow.insertCell(3);
        var ftCell = statsRow.insertCell(4);
        var trheePointCell = statsRow.insertCell(5);
        var rebCell = statsRow.insertCell(6);
        var astCell = statsRow.insertCell(7);
        var stlCell = statsRow.insertCell(8);
        var blkCell = statsRow.insertCell(9);
        var toCell = statsRow.insertCell(10);
        var ptsCell = statsRow.insertCell(11);

        var statsRowTotal = statsTable.insertRow(16);
        var minutesCellTotal = statsRowTotal.insertCell(0);
        var fgaCellTotal = statsRowTotal.insertCell(1);
        var fgCellTotal = statsRowTotal.insertCell(2);
        var ftaCellTotal = statsRowTotal.insertCell(3);
        var ftCellTotal = statsRowTotal.insertCell(4);
        var trheePointCellTotal = statsRowTotal.insertCell(5);
        var rebCellTotal = statsRowTotal.insertCell(6);
        var astCellTotal = statsRowTotal.insertCell(7);
        var stlCellTotal = statsRowTotal.insertCell(8);
        var blkCellTotal = statsRowTotal.insertCell(9);
        var toCellTotal = statsRowTotal.insertCell(10);
        var ptsCellTotal = statsRowTotal.insertCell(11);
    
        minutesCell.innerHTML = avgMinutes;
        fgaCell.innerHTML = avgFGMade+"/"+avgFGAttempted;
        fgCell.innerHTML = (avgFGMade/avgFGAttempted).toFixed(3);
        ftaCell.innerHTML = avgFTMade+"/"+avgFTAttempted;
        ftCell.innerHTML = (avgFTMade/avgFTAttempted).toFixed(3);
        trheePointCell.innerHTML = avg3PM;
        rebCell.innerHTML = avgRebounds;
        astCell.innerHTML = avgAssists;
        stlCell.innerHTML = avgSteals;
        blkCell.innerHTML = avgBlocks;
        toCell.innerHTML = avgTO;
        ptsCell.innerHTML = avgPoints;

        minutesCellTotal.innerHTML = avgMinutesTotal;
        fgaCellTotal.innerHTML = avgFGMadeTotal+"/"+avgFGAttemptedTotal;
        fgCellTotal.innerHTML = (avgFGMadeTotal/avgFGAttemptedTotal).toFixed(3);
        ftaCellTotal.innerHTML = avgFTMadeTotal+"/"+avgFTAttemptedTotal;
        ftCellTotal.innerHTML = (avgFTMadeTotal/avgFTAttemptedTotal).toFixed(3);
        trheePointCellTotal.innerHTML = avg3PMTotal;
        rebCellTotal.innerHTML = avgReboundsTotal;
        astCellTotal.innerHTML = avgAssistsTotal;
        stlCellTotal.innerHTML = avgStealsTotal;
        blkCellTotal.innerHTML = avgBlocksTotal;
        toCellTotal.innerHTML = avgTOTotal;
        ptsCellTotal.innerHTML = avgPointsTotal;

        playersRow.classList.add("playersRow");
        statsRow.classList.add("statsRow");
        playersRowTotal.classList.add("playersRow");
        statsRowTotal.classList.add("statsRow");


    }, 3000);

  
}