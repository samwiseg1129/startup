export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"],
    datasets: [
        {
            label: "Total Users",
            data: [1000,2000,4000,3000,3500,6000,9000],
            borderColor: "blue"
        },
    ],
};


export const barChartData = {
    labels: ["Viewed Landing", "Created Login", "Entered Payment", "Started Task", "Completed Task"],
    datasets: [
        {
        label: "Inbound Funnels",
        data: [ 1200,300,180,150,100],
        backgroundColor: ["rgba(9255,99,132,0.2)"],
        borderColor: ['rgba(54,162,235,1'],
        borderWidth: 1,
        },
    ],
};

export const pieChartData = {
    labels: ["Organic", "Social Media", "Key-Word", "Direct", "Affiliate"],
    datasets: [
        {
            label: "Inbound Funnels",
            data: [120,60,30,90,45],
            backgroundColor: [
                "rgba(255,99,132,0.2)",
                "rgba(54,162,235,0.2)",
                "rgba(255,206,86,0.2)",
                "rgba(75,192,192,0.2)",
                "rgba(153,102,255,0.2)"
            ]
        }
    ]
}