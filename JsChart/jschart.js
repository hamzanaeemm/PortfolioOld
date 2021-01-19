var labels1 = ['Yes', 'Yes but only boston cream'];
var data1 = [69, 31];
var colors1 = ['red','green'];

var myChart1 = document.getElementById("myChart").getContext('2d');

var chart1 = new Chart(myChart1, {
	type: 'doughnut',
	data: {
		labels: labels1,
		datasets: [{
			data: data1,
			backgroundColor: colors1
	}]

},
options: {
		title: {
			text: "Do You Like Doughnut",
			display: true
		}
	}
});
var labels2 = ['America Airlines Group', 'RynAir', 'Qatar Airways', 'Fly Dubai'];
var data2 = [198, 170, 166, 180];
var colors2 = ['red','green','blue', 'pink'];

var myChart2 = document.getElementById("myChart2").getContext('2d');

var chart2 = new Chart(myChart2, {
	type: 'bar',
	data: {
		labels: labels2,
		datasets: [{
			data: data2,
			backgroundColor: colors2
	}]

},
options: {
		title: {
			text: "Number of Passengers Carried in 2017 in millions",
			display: true
		},
		legend:{
			display: false
		}
	}
});

var labels3 = ['Attack', 'Defence', 'Passing', 'Tackle', 'Speed'];
var myChart3 = document.getElementById("myChart3").getContext('2d');

var chart3 = new Chart(myChart3, {
	type: 'radar',
	data: {
		labels: labels3,
		datasets: [
		{
			label: 'Messi',
			fill: true,
			backgroundColor: "rgba(179, 181, 198, 0.2)",
			borderColor: "rgba(179, 181, 198, 1)",
			pointBackgroundColor: "rgba(179, 181, 198, 1)",
			data: ['20','59','30','22','19']
	},
		{
			label: 'Ronaldo',
			fill: true,
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgba(225, 99, 132, 1)",
			pointBackgroundColor: "rgba(225, 99, 132, 1)",
			data: ['51','10','32','20','44']
	}

]

},
options: {
		title: {
			text: "Skills",
			display: true
		},
		legend:{
			display: true
		}
	}
});

var labels4 = ['Koblenz', 'Cologne', 'Frankfurt', 'Berlin'];
var data4 = [1.4 , 1.08, 7.53, 3.645];
var colors4 = ['red','green','blue', 'pink'];

var myChart4 = document.getElementById("myChart4").getContext('2d');
var pop="million";
var chart4 = new Chart(myChart4, {
	type: 'pie',
	data: {
		labels: labels4,
		datasets: [{
			data: data4,
			backgroundColor: colors4
	}]

},
options: {
		title: {
			text: "Population in million",
			display: true
		},
		legend:{
			display: true
		}
	}
});