import { BarChart, PieChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import { Banner } from "../componets/Banner";
import { ChartsMoldel } from "../models/ChartsMoldel";
import { ReviewInterface } from "../models/ReviewInterface";
import {
  Avatar,
  CircularProgress,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoginModel } from "../models/LoginModel";
import { ReportService } from "../services/ReportService";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Upload } from "../componets/Upload";
import CountUp from "react-countup";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export default function Reports() {
  const [chartInfo, setChartInfo] = useState<ChartsMoldel>({
    average_rating: 0,
    counts: [0],
    negative_count: 0,
    positive_count: 0,
    timestamps: [new Date()],
    total_reviews: 0,
    report: "",
  });
  const [reviews, setReviews] = useState<ReviewInterface>({
    reviews: [],
    name_list: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigator = useNavigate();

  useEffect(() => {
    const auth = window.localStorage.getItem("auth");
    if (auth == null) return navigator("/signin");
    const user: LoginModel = JSON.parse(auth);
    new ReportService()
      .getChartData(user.user.company)
      .then((res) => setChartInfo(res))
      .then(() => {
        new ReportService().getReviews(user.user.company).then((res) => {
          setReviews(res);
          setLoading(true);
        });
      })
      .catch((error: AxiosError) =>{
        if(error.response?.status == 404){
          toast.warn('No records were found')
        }else{
          toast.error("An error occured")
        }
      })
      .finally(()=> setLoading(true))
  }, []);

  //generate random colors
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name[0]}`,
    };
  }

  return (
    <div>
      <Banner currentPage="Feedback" title="Feedback Report Dashboard" />
      {loading ? (
        <div className="flex flex-col md:flex-row mt-4">
          <div>
            <h2 className="text-center text-xl font-medium underline">
              Feedback Collected Over Time
            </h2>
            <BarChart
              xAxis={[{ scaleType: "band", data: chartInfo.timestamps}]}
              series={[{ data: chartInfo.counts }]}
              width={700}
              height={350}
            />
            <div className="ml-9 flex flex-row gap-10 mb-11 mt-6">
              <div className="flex items-center">
                <span className="text-lg font-semibold mx-2">
                  Average rating:{" "}
                </span>
                <span className="text-3xl font-extralight">
                  {chartInfo.average_rating}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold mx-2">
                  Total reviews:{" "}
                </span>
                <span className="text-3xl font-extralight">
                  <CountUp end={chartInfo.total_reviews} />
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center text-xl font-medium mb-8 underline">
              Sentiment Split of Feedback Collected
            </h2>
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: chartInfo.positive_count,
                      label: "Positive",
                    },
                    {
                      id: 1,
                      value: chartInfo.negative_count,
                      label: "Negative",
                    },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      ) : (
        <div className="text-center my-2">
          <CircularProgress color="success" />
        </div>
      )}

      {loading ? (
        <div className="mx-6">
          <h1 className="ml-4 mb-2 text-xl font-semibold">Report Summary</h1>
          <p
            style={{ whiteSpace: "pre-wrap" }}
            className="font-serif ml-4 w-fit pr-8"
          >
            {chartInfo.report}
          </p>
          <h1 className="ml-4 mt-8 text-xl font-semibold">
            Feedback Collected
          </h1>
          <List sx={{ bgcolor: "background.paper" }}>
            {reviews.reviews.map((review, index) => (
              <ListItem key={index} alignItems="flex-start">
                <div className="flex flex-row gap-2 items-center">
                  {/* <Avatar>{[1]}</Avatar> */}
                  <Avatar {...stringAvatar(reviews.name_list[index])} />
                  <ListItemText
                    primary={
                      <Typography variant="h6">
                        {reviews.name_list[index]}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body1">{review}</Typography>
                    }
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <div className="text-center my-2">
          <CircularProgress color="success" />
        </div>
      )}
      <div className="fixed z-20 bottom-8 right-5">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          onClick={() => setIsOpen(true)}
          startIcon={<CloudUploadIcon />}
        >
          Upload Reports
        </Button>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Upload Feedback CSV</DialogTitle>
        <Upload setIsopen={setIsOpen} />
      </Dialog>
    </div>
  );
}
