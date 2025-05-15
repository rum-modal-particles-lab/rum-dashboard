import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function FrequencyChart({ corpus }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!corpus || !Array.isArray(corpus) || corpus.length === 0 || !chartRef.current) return;

    const allText = corpus.map(entry => entry.excerpt || entry.context || "").join(" ").toLowerCase();

    const words = allText.match(/\b\w{2,}\b/g);

    const freqMap = {};
    words.forEach((word) => {
      freqMap[word] = (freqMap[word] || 0) + 1;
    });

    const sorted = Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30);

    const labels = sorted.map((item) => item[0]);
    const data = sorted.map((item) => item[1]);

    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Top 30 Word Frequencies",
            data,
            backgroundColor: "rgba(0, 255, 255, 0.7)",
            borderColor: "rgba(0, 255, 255, 1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(0, 255, 255, 1)",
            hoverBorderColor: "rgba(0, 255, 255, 1)",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#ddd",
              font: {
                size: 12,
              },
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: "#ddd",
              font: {
                size: 12,
              },
            },
            grid: {
              display: false,
            },
          },
        },
        elements: {
          bar: {
            borderRadius: 8,
          },
        },
        animation: {
          duration: 1000,
        },
      },
    });

    return () => chart.destroy();
  }, [corpus]);

  return (
    <div className="w-full bg-gray-900 p-4 rounded-lg shadow-lg">
      <canvas ref={chartRef} />
    </div>
  );
}
