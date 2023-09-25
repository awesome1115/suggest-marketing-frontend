/*
Template Name: Attex - Responsive 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: datatable js
*/

class GridDatatable {

    init() {
        this.basicTableInit();
    }

    basicTableInit() {

        // Basic Table
        if (document.getElementById("table-ip-index"))
            new gridjs.Grid({
                columns: [{
                    name: 'No',
                    formatter: (function (cell) {
                        return gridjs.html('<span class="font-semibold">' + cell + '</span>');
                    })
                },
                    "IP", "地域", "状態",
                    
                {
                    name: '編集',
                    width: '80px',
                    formatter: (function (cell) {
                        return gridjs.html("<a href='#' class='text-reset text-decoration-underline text-center' style='text-align:center;'>" + "<i class='ri-pencil-fill'></i>" + "</a>");
                    })
                },
                {
                    name: '削除',
                    width: '80px',
                    formatter: (function (cell) {
                        return gridjs.html("<a href='#' class='text-reset text-decoration-underline'>" + "<i class='ri-delete-bin-2-line text-base'></i>" + "</a>");
                    })
                },
                ],
                pagination: {
                    limit: 5
                },
                sort: true,
                search: true,
                data: [
                    ["01", "Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
                    ["02", "Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
                    ["03", "Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
                    ["04", "Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
                    ["05", "Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
                    ["06", "Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
                    ["07", "Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
                    ["08", "Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
                    ["09", "Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
                    ["10", "Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
                ]
            }).render(document.getElementById("table-gridjs"));

        // // card Table
        // if (document.getElementById("table-card"))
        //     new gridjs.Grid({
        //         columns: ["Name", "Email", "Position", "Company", "Country"],
        //         sort: true,
        //         pagination: {
        //             limit: 5
        //         },
        //         data: [
        //             ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        //             ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        //             ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        //             ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        //             ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        //             ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        //             ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        //             ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        //             ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        //             ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        //         ]
        //     }).render(document.getElementById("table-card"));


        // // pagination Table
        // if (document.getElementById("table-pagination"))
        //     new gridjs.Grid({
        //         columns: [{
        //             name: 'ID',
        //             width: '120px',
        //             formatter: (function (cell) {
        //                 return gridjs.html('<a href="" class="font-medium">' + cell + '</a>');
        //             })
        //         }, "Name", "Date", "Total", "Status",
        //         {
        //             name: 'Actions',
        //             width: '100px',
        //             formatter: (function (cell) {
        //                 return gridjs.html("<button type='button' class='btn btn-sm btn-light'>" +
        //                     "Details" +
        //                     "</button>");
        //             })
        //         },
        //         ],
        //         pagination: {
        //             limit: 5
        //         },

        //         data: [
        //             ["#VL2111", "Jonathan", "07 Oct, 2021", "$24.05", "Paid",],
        //             ["#VL2110", "Harold", "07 Oct, 2021", "$26.15", "Paid"],
        //             ["#VL2109", "Shannon", "06 Oct, 2021", "$21.25", "Refund"],
        //             ["#VL2108", "Robert", "05 Oct, 2021", "$25.03", "Paid"],
        //             ["#VL2107", "Noel", "05 Oct, 2021", "$22.61", "Paid"],
        //             ["#VL2106", "Traci", "04 Oct, 2021", "$24.05", "Paid"],
        //             ["#VL2105", "Kerry", "04 Oct, 2021", "$26.15", "Paid"],
        //             ["#VL2104", "Patsy", "04 Oct, 2021", "$21.25", "Refund"],
        //             ["#VL2103", "Cathy", "03 Oct, 2021", "$22.61", "Paid"],
        //             ["#VL2102", "Tyrone", "03 Oct, 2021", "$25.03", "Paid"],
        //         ]
        //     }).render(document.getElementById("table-pagination"));

        // // search Table
        // if (document.getElementById("table-search"))
        //     new gridjs.Grid({
        //         columns: ["Name", "Email", "Position", "Company", "Country"],
        //         pagination: {
        //             limit: 5
        //         },
        //         search: true,
        //         data: [
        //             ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        //             ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        //             ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        //             ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        //             ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        //             ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        //             ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        //             ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        //             ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        //             ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        //         ]
        //     }).render(document.getElementById("table-search"));

        // // Sorting Table
        // if (document.getElementById("table-sorting"))
        //     new gridjs.Grid({
        //         columns: ["Name", "Email", "Position", "Company", "Country"],
        //         pagination: {
        //             limit: 5
        //         },
        //         sort: true,
        //         data: [
        //             ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        //             ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        //             ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        //             ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        //             ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        //             ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        //             ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        //             ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        //             ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        //             ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        //         ]
        //     }).render(document.getElementById("table-sorting"));


        // // Loading State Table
        // if (document.getElementById("table-loading-state"))
        //     new gridjs.Grid({
        //         columns: ["Name", "Email", "Position", "Company", "Country"],
        //         pagination: {
        //             limit: 5
        //         },
        //         sort: true,
        //         data: function () {
        //             return new Promise(function (resolve) {
        //                 setTimeout(function () {
        //                     resolve([
        //                         ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        //                         ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        //                         ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        //                         ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        //                         ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        //                         ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        //                         ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        //                         ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        //                         ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        //                         ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"]
        //                     ])
        //                 }, 2000);
        //             });
        //         }
        //     }).render(document.getElementById("table-loading-state"));


        // // Fixed Header
        // if (document.getElementById("table-fixed-header"))
        //     new gridjs.Grid({
        //         columns: ["Name", "Email", "Position", "Company", "Country"],
        //         sort: true,
        //         pagination: true,
        //         fixedHeader: true,
        //         height: '400px',
        //         data: [
        //             ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        //             ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        //             ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        //             ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        //             ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        //             ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        //             ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        //             ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        //             ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        //             ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        //         ]
        //     }).render(document.getElementById("table-fixed-header"));


        // // Hidden Columns
        // if (document.getElementById("table-hidden-column"))
        //     new gridjs.Grid({
        //         columns: ["Name", "Email", "Position", "Company",
        //             {
        //                 name: 'Country',
        //                 hidden: true
        //             },
        //         ],
        //         pagination: {
        //             limit: 5
        //         },
        //         sort: true,
        //         data: [
        //             ["Jonathan", "jonathan@example.com", "Senior Implementation Architect", "Hauck Inc", "Holy See"],
        //             ["Harold", "harold@example.com", "Forward Creative Coordinator", "Metz Inc", "Iran"],
        //             ["Shannon", "shannon@example.com", "Legacy Functionality Associate", "Zemlak Group", "South Georgia"],
        //             ["Robert", "robert@example.com", "Product Accounts Technician", "Hoeger", "San Marino"],
        //             ["Noel", "noel@example.com", "Customer Data Director", "Howell - Rippin", "Germany"],
        //             ["Traci", "traci@example.com", "Corporate Identity Director", "Koelpin - Goldner", "Vanuatu"],
        //             ["Kerry", "kerry@example.com", "Lead Applications Associate", "Feeney, Langworth and Tremblay", "Niger"],
        //             ["Patsy", "patsy@example.com", "Dynamic Assurance Director", "Streich Group", "Niue"],
        //             ["Cathy", "cathy@example.com", "Customer Data Director", "Ebert, Schamberger and Johnston", "Mexico"],
        //             ["Tyrone", "tyrone@example.com", "Senior Response Liaison", "Raynor, Rolfson and Daugherty", "Qatar"],
        //         ]
        //     }).render(document.getElementById("table-hidden-column"));

    }

}

document.addEventListener('DOMContentLoaded', function (e) {
    new GridDatatable().init();
});