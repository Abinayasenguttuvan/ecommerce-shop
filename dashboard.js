// Global Chart Settings — Disable ALL animations
Chart.defaults.animation = false;

// ================= Bar Chart =================
const barCtx = document.getElementById("barChart");

new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Electronics", "Fashion", "Home", "Beauty", "Sports"],
    datasets: [{
      label: "Sales (₹)",
      data: [80000, 120000, 65000, 40000, 55000],
      backgroundColor: ["#6a5acd", "#48c6ef", "#f39c12", "#e67e22", "#2ecc71"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animations: false
  }
});

// ================= Pie Chart =================
const pieCtx = document.getElementById("pieChart");

new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: ["COD", "Prepaid", "UPI", "EMI"],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: ["#48c6ef", "#6a5acd", "#2ecc71", "#f39c12"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animations: false
  }
});

// ================= Line Chart =================
const lineCtx = document.getElementById("lineChart");

new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue (₹)",
      data: [45000, 60000, 80000, 75000, 90000, 110000],
      borderColor: "#6a5acd",
      borderWidth: 3,
      tension: 0.0,  // straight lines
      fill: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animations: false
  }
});
