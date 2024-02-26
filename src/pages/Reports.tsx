import { BarChart, PieChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import { Banner } from "../componets/Banner";
import { ChartsMoldel } from "../models/ChartsMoldel";
import { ReviewInterface } from "../models/ReviewInterface";
import { ReportService } from "../services/ReportService";
import { format } from "date-fns";
import { CircularProgress, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginModel } from "../models/LoginModel";

export default function Reports() {
  const [chartInfo, setChartInfo] = useState<ChartsMoldel>({
    average_rating: 0,
    counts: [],
    negative_count: 0,
    positive_count: 0,
    timestamps: [],
    total_reviews: 0,
  });
  const [reviews, setReviews] = useState<ReviewInterface>({
    reviews: [],
    name_list: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigator = useNavigate();

  useEffect(() => {
    const auth = window.localStorage.getItem('auth')
    if(auth==null) return navigator('/signin')
    const user: LoginModel = JSON.parse(auth);
    new ReportService()
      .getChartData(user.user.company)
      .then((res) => setChartInfo(res))
      .then(() => {
        new ReportService().getReviews(user.user.company).then((res) => {
          setReviews(res);
          setLoading(true);
        });
      });
  }, []);

  return (
    <div>
      <Banner currentPage="reports" title="Reports" />
      {loading ? (
        <div className="flex flex-row items-center">
          <BarChart
            xAxis={[{ scaleType: "band", data: chartInfo.timestamps }]}
            series={[{ data: chartInfo.counts }]}
            width={700}
            height={350}
          />

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: chartInfo.positive_count, label: "Positive" },
                  { id: 1, value: chartInfo.negative_count, label: "Negative" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      ) : (
        <div className="text-center my-2">
          <CircularProgress color="success" />
        </div>
      )}

      <div className="mx-6">
        <h1 className="ml-4 text-xl font-semibold">Reports list</h1>
        <List sx={{bgcolor: 'background.paper'}}>
          {reviews.reviews.map((review, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography variant="h6">
                    {reviews.name_list[index]}
                  </Typography>
                }
                secondary={<Typography variant="body1">{review}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
