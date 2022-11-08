import { Button, MenuItem, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import jobOfferApi from '../../../api/JobOffer';
import "./style.scss";

const provivince = ["Thành phố Cần Thơ", "Thành phố Đà Nẵng", "Thành phố Hà Nội", "Thành phố Hải Phòng", "Thành phố Hồ Chí Minh", "Tỉnh An Giang", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bắc Giang", "Tỉnh Bắc Kạn", "Tỉnh Bạc Liêu", "Tỉnh Bắc Ninh", "Tỉnh Bến Tre", "Tỉnh Bình Định", "Tỉnh Bình Dương", "Tỉnh Bình Phước", "Tỉnh Bình Thuận", "Tỉnh Cà Mau", "Tỉnh Cao Bằng", "Tỉnh Đắk Lắk", "Tỉnh Đắk Nông", "Tỉnh Điện Biên", "Tỉnh Đồng Nai", "Tỉnh Đồng Tháp", "Tỉnh Gia Lai", "Tỉnh Hà Giang", "Tỉnh Hà Nam", "Tỉnh Hà Tĩnh", "Tỉnh Hải Dương", "Tỉnh Hậu Giang", "Tỉnh Hoà Bình", "Tỉnh Hưng Yên", "Tỉnh Khánh Hòa", "Tỉnh Kiên Giang", "Tỉnh Kon Tum", "Tỉnh Lai Châu", "Tỉnh Lâm Đồng", "Tỉnh Lạng Sơn", "Tỉnh Lào Cai", "Tỉnh Long An", "Tỉnh Nam Định", "Tỉnh Nghệ An", "Tỉnh Ninh Bình", "Tỉnh Ninh Thuận", "Tỉnh Phú Thọ", "Tỉnh Phú Yên", "Tỉnh Quảng Bình", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", "Tỉnh Quảng Ninh", "Tỉnh Quảng Trị", "Tỉnh Sóc Trăng", "Tỉnh Sơn La", "Tỉnh Tây Ninh", "Tỉnh Thái Bình", "Tỉnh Thái Nguyên", "Tỉnh Thanh Hóa", "Tỉnh Thừa Thiên Huế", "Tỉnh Tiền Giang", "Tỉnh Trà Vinh", "Tỉnh Tuyên Quang", "Tỉnh Vĩnh Long", "Tỉnh Vĩnh Phúc", "Tỉnh Yên Bái"]

function CreateJO() {
    // validate form with formik and yup with materialUI numOfRecruit offerEndTime salary age startTime endTime jobDescription other business location province address degreejobType
    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    const [select, setSelect] = useState()
    const [repo, setRepo] = useState()
    const [loading, setLoading] = useState()
    const [fectch, setFectch] = useState([])
    const [data, setData] = useState({
        accountID: user?.id,
    })
    const [selectbusiness, setSelectbusiness] = useState()
    const [address, setAddress] = useState('')
    const formik = useFormik({
        initialValues: {
            // accountID: user?.id,
            // numOfRecruit: "",
            // offerEndTime: Date.now(),
            // salary: "",
            // age: "",
            // startTime: "",
            // endTime: "",
            // jobDescription: "",
            // other: "",
            // business: "",
            // location: "",
            // province: "",
            address: "",
            // degree: "",
            // jobType: "",
        },
        validationSchema: Yup.object({
            numOfRecruit: Yup.number().required("Vui lòng nhập vào số lượng tuyển").typeError("Xin vui lòng nhập số"),
            offerEndTime: Yup.date().required("Vui lòng chọn ngày kết thúc đăng tuyển").min(new Date(), "Ngày kết thúc phải lớn hơn ngày hiện tại"),
            salary: Yup.number().typeError("Xin vui lòng nhập lương"),
            age: Yup.number().typeError("Xin vui lòng nhập số tuổi"),
            startTime: Yup.string().typeError("Xin vui lòng nhập giờ bắt đầu").min(1, "Xin vui lòng nhập đúng định dạng giờ").max(24, "Xin vui lòng nhập đúng định dạng giờ"),
            endTime: Yup.string().typeError("Xin vui lòng nhập giờ kết thúc"),
            jobDescription: Yup.string().typeError("Xin vui lòng nhập mô tả"),
            other: Yup.string(),
            business: Yup.string().typeError("Xin vui lòng chọn công ty"),
            location: Yup.number(),
            province: Yup.string(),
            address: Yup.string().typeError("Xin vui lòng nhập địa chỉ"),
            degree: Yup.string(),
            jobType: Yup.string().required("Vui lòng chọn loại công việc"),
        }),
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
            const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
            const data = {
                accountID: user?.id,
                numOfRecruit: values.numOfRecruit,
                offerEndTime: values.offerEndTime,
                salary: values.salary,
                age: values.age,
                startTime: values.startTime,
                endTime: values.endTime,
                jobDescription: values.jobDescription,
                other: values.other,
                business: values.business,
                location: values.location,
                province: values.province,
                address: values.address,
                degree: values.degree,
                jobType: values.jobType,
            }
            console.log(data)
            const url = "https://gig-worker-backend.azurewebsites.net/JobOffer/CreateJO";
            axios.post(url, data).then((res) => {
                console.log(res)
                if (res.status === 200) {
                    alert("Tạo thành công")
                }
            })
        },
        onChange: (e) => {
            setData({ ...data, [e.target.name]: e.target.value })
            //on province change get location
            if (e.target.name === "province") {
                const url = `https://gig-worker-backend.azurewebsites.net/Location/City?province=${e.target.value}`;
                axios.get(url)
                    .then((res) => {
                        const { data } = res;
                        setFectch(data)
                    })
            }
        },
    });
    console.log(fetch)
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const joblocation = await jobOfferApi.getJobType(user?.id);
            setRepo(joblocation);
            setLoading(false)
        }
        fetchData();
    }, []);
    const inputsHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const selectLocation = (e) => {
        axios.get(`https://gig-worker-backend.azurewebsites.net/Location/City?province=${e.target.value}`)
            .then((res) => {
                const { data } = res;
                setFectch(data);
                console.log(fectch);
                console.log(data);
                setLoading(false)
            })
        formik.setFieldValue("province", e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const selectBusiness = (e) => {
        setSelectbusiness(e.target.value)
    }
    const inputaddress = (e) => {
        setAddress(e.target.value)
    }
    // console.log(select)
    // console.log(fetch)
    console.log(data)
    const handleSubmit = (event) => {
        event.preventDefault(event)
        try {
            axios.post("https://gig-worker-backend.azurewebsites.net/JobOffer/CreateJO",
                data
            )
                .then(res => {
                    if (res.status === 200) {
                        alert("Tạo thành công")
                    } else if (res.status === 400) {
                        alert("Tạo thất bại")
                    } else if (res.status === 500) {
                        alert("Lỗi hệ thống")
                    } else {
                        alert("Lỗi")
                    }
                })
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }

    }
    return (
        <Container>
            <Box className='intro-create-job'>
                <h1>Tạo bài viết mới và đăng tuyển công việc của bạn</h1>
                <h3>Hãy ghi thông tin cụ thể và chi tiết để mọi người dễ dàng tiếp cận công việc dễ dàng hơn</h3>
            </Box>
            <Box className='form-create-job'
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                autoComplete="off"
            >
                {/*các field cần có:
                1. Job type: select
                2. Location: select (city, province) - đã có
                3. Degree: select
                4. Business: select (chưa có business thì input text)
                5. Num of Recruit: input text (bắt buộc)
                6. offer end time: input text (bắt buộc DD/MM/YYYY)
                7. Salary: input text
                8. Age: input text
                9. Job description: input text
                10. Other: input text
                11. Start time: input text (vd 08:00)
                12. End time: input text
                13. Address: input text */}

                <h4>Thông tin loại công việc và địa chỉ ứng tuyển:</h4>
                <TextField
                    select
                    label="Chọn loại công việc"
                    value={formik.values.jobType}
                    onChange={formik.handleChange}
                    name='jobType'>
                    {repo?.jobNames?.map((option) => (
                        <MenuItem key={option?.typeID} value={option?.typeID}>
                            {option?.name}
                        </MenuItem>
                    ))}
                </TextField>
                {formik.errors.jobType ? <div className='error-validate' >{formik.errors.jobType}</div> : null}
                <TextField
                    select
                    label="Chọn bằng cấp"
                    value={formik.values.degree}
                    onChange={formik.handleChange}
                    name='degree'>
                    {repo?.degreeNames?.map((option) => (
                        <MenuItem key={option?.degreeID} value={option?.degreeID}>
                            {option?.degreeName}
                        </MenuItem>
                    ))}
                </TextField>
                {/* {formik.errors.degree ? <div>{formik.errors.degree}</div> : null} */}
                <p>*Nếu nơi ứng tuyển không phải là doanh nghiệp hãy điền rõ địa chỉ ở ô bên dưới:</p>
                <TextField label="Địa chỉ:" variant="standard" value={formik.values.address} onChange={formik.handleChange} name='address' />
                {formik.values.address != '' ?
                    <>
                        <TextField
                            select
                            label="Chọn Tỉnh"
                            // value={select}
                            onChange={formik.handleChange && selectLocation}
                            name='province'>
                            {provivince.map((option) => (
                                <MenuItem key={option} value={option} >
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            select
                            label="Chọn Thành phố/Quận/Huyện"
                            onChange={formik.handleChange}
                            name='location'>
                            {fectch?.map((option) => (
                                <MenuItem key={option?.locationID} value={option?.locationID}>
                                    {option?.city}
                                </MenuItem>
                            ))}
                        </TextField>
                    </> : <TextField
                        select
                        label="Chọn địa chỉ doanh nghiệp"
                        onChange={formik.handleChange}
                        name='business'>
                        {repo?.businessAddresses?.map((option) => (
                            <MenuItem key={option?.businessID} value={option?.businessID}>
                                {option?.address}
                            </MenuItem>
                        ))}
                    </TextField>}





                <h4>Thông tin chi tiết về công việc:</h4>
                <TextField required label="Số lượng cần tuyển:" variant="standard" value={formik.values.numOfRecruit} onChange={formik.handleChange} name='numOfRecruit' />
                {formik.errors.numOfRecruit ? <div>{formik.errors.numOfRecruit}</div> : null}
                <TextField
                    label="Ngày kết thúc đăng tuyển"
                    name='offerEndTime'
                    type="date"
                    value={formik.values.offerEndTime}
                    onChange={formik.handleChange}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {formik.errors.offerEndTime ? <div>{formik.errors.offerEndTime}</div> : null}
                <TextField label="Lương (theo giờ):" variant="standard" onChange={formik.handleChange} defaultValue={formik.values.salary} name='salary' />
                {formik.errors.salary ? <div>{formik.errors.salary}</div> : null}
                <TextField label="Tuổi:" variant="standard" onChange={formik.handleChange} defaultValue={formik.values.age} name='age' />
                {formik.errors.age ? <div>{formik.errors.age}</div> : null}
                <TextField
                    id="time"
                    name='startTime'
                    label="Thời gian bắt đầu"
                    type="time"
                    defaultValue="07:30"
                    value={formik.values.startTime}
                    onChange={formik.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
                {formik.errors.startTime ? <div>{formik.errors.startTime}</div> : null}
                <TextField
                    id="time"
                    name='endTime'
                    label="Thời gian kết thúc"
                    type="time"
                    defaultValue="07:30"
                    value={formik.values.endTime}
                    onChange={formik.handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    sx={{ width: 150 }}
                />
                {formik.errors.endTime ? <div>{formik.errors.endTime}</div> : null}
                <TextField label="Mô tả công việc:" variant="standard" onChange={formik.handleChange} defaultValue={formik.values.jobDescription} name='jobDescription' />
                {formik.errors.jobDescription ? <div>{formik.errors.jobDescription}</div> : null}
                <TextField label="Yêu cầu khác:" variant="standard" onChange={formik.handleChange} defaultValue={formik.values.other} name='other' />
                {formik.errors.other ? <div>{formik.errors.other}</div> : null}

                <Button className='submit-button' type='submit'>Đăng tuyển</Button>
            </Box>
        </Container>
    )
}

export default CreateJO