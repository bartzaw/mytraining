var multiplicationTable = "<table>";

for(var i = 1; i <= 10; i++)
{
    multiplicationTable += "<tr>";

    for (var j =1; j <= 10; j++)
        multiplicationTable += "<td>" + i * j + "</td>";

    multiplicationTable += "</tr>"
}

multiplicationTable += "</table>";

document.write(multiplicationTable);