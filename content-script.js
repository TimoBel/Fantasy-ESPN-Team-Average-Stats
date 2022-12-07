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

        
        function getAvgStat(stat,fixed){
            var avgStat = 0;
            for(let i =1; i<stat.length-3; i++){
                if(stat[i].innerText != "--"){
                    avgStat += parseFloat(stat[i].innerText); 
                }
                
            }
            avgStat = avgStat/10;
            return avgStat.toFixed(fixed);
        }

        function getAttemps(stat, type){
            var avgStat = 0
            for(let i =1; i<stat.length-3; i++){
                if(stat[i].innerText != "--/--"){
                    avgStat += parseFloat(stat[i].innerText.split('/')[type])
                }    
            }
            avgStat = avgStat/10;
            return avgStat.toFixed(1);

        }
        
        var avgMinutes = getAvgStat(minutes,1);  
        var avgFGMade = getAttemps(fieldGoalAttemps,0);
        var avgFGAttempted = getAttemps(fieldGoalAttemps,1);
        var avgFTMade = getAttemps(freeThrowAttemps,0);
        var avgFTAttempted = getAttemps(freeThrowAttemps,1);  
        var avg3PM = getAvgStat(trheePointsMade, 1);
        var avgRebounds = getAvgStat(rebounds, 1);
        var avgAssists = getAvgStat(assists, 1);
        var avgSteals = getAvgStat(steals, 1);
        var avgBlocks = getAvgStat(blocks, 1);
        var avgTO = getAvgStat(turnOvers, 1);
        var avgPoints = getAvgStat(points, 1);

        var playersRow = playersTable.insertRow(12);
        var cell1 = playersRow.insertCell(0);
        cell1.innerHTML = "AVG";

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

        playersRow.classList.add("playersRow");
        statsRow.classList.add("statsRow");


    }, 3000);

  
}