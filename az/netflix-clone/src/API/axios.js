import axios from "axios";

const intance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ba50f7401667fc86acba2bc89fe183a0",
        language: "ko-KR",
    }
})

export default intance;