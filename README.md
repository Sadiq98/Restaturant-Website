# Restaturant-Website
Restaurant Website made using html, bootstrap and JavaScript
https://sadiq98.github.io/Restaturant-Website/







<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataTable Row Reorder</title>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/rowreorder/1.2.4/css/rowReorder.dataTables.min.css">
</head>
<body>
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Code</th>
                <th>Name</th>
                <th>Position</th>
            </tr>
        </thead>
        <tbody>
            <tr data-id="1">
                <td>1</td>
                <td>P001</td>
                <td>Akash</td>
                <td>System Architect</td>
            </tr>
            <tr data-id="2">
                <td>2</td>
                <td>P002</td>
                <td>Pranav</td>
                <td>Accountant</td>
            </tr>
            <tr data-id="3">
                <td>3</td>
                <td>P003</td>
                <td>Amit</td>
                <td>Accountant</td>
            </tr>
            <tr data-id="4">
                <td>4</td>
                <td>P004</td>
                <td>Ankit</td>
                <td>Accountant</td>
            </tr>
        </tbody>
    </table>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/rowreorder/1.2.4/js/dataTables.rowReorder.min.js"></script>
    <script>
        $(document).ready(function () {
            var table = $('#example').DataTable({
                rowReorder: true
            });

            table.on('row-reorder', function (e, diff, edit) {
                updatePriorityColumn(table);
            });

            function updatePriorityColumn(table) {
                table.rows().every(function (index) {
                    var rowData = this.data();
                    rowData[0] = index + 1; // Update the ID (or any other data field for priority)
                    rowData[1] = 'P00' + (index + 1); // Update the code as "P001", "P002", etc.
                    this.invalidate();
                });
                table.draw();
            }
        });
    </script>
</body>
</html>
https://www.guvi.in/blog/react-project-ideas-for-developers/

    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/rowreorder/1.2.4/js/dataTables.rowReorder.min.js"></script>

   <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/rowreorder/1.2.4/css/rowReorder.dataTables.min.css">
