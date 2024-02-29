import axios from "axios";
import { ChartsMoldel } from "../models/ChartsMoldel";
import { ReviewInterface } from "../models/ReviewInterface";
import { Feedback } from "../models/Feedback";

export class ReportService{
    private baseURL = 'https://insightai-backend-eetx.onrender.com/apidocs'

    
    public async getChartData(company: string): Promise<ChartsMoldel>{
        try{
            const res = await axios.get(
                `${this.baseURL}/get_dashboard_data?product_service=${company}`
              );              
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async getReviews(company: string): Promise<ReviewInterface>{
        try{
            const res = await axios.get(
                `${this.baseURL}/get_reviews?product_service=${company}`
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async addReview(form: Feedback): Promise<ReviewInterface>{
        try{
            const res = await axios.post(
                `${this.baseURL}/post_reviews`,
                form
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

    public async upload(form: FormData): Promise<any>{
        try{
            const res = await axios.post(
                `${this.baseURL}/upload`,
                form,
                {headers: {
                    "Content-Type" : "multipart/form-data"
                }}
              );
            return res.data;
        }catch(error){
            throw error;
        }
        
    }

}