import { Box, Button, Container, MenuItem, Switch, TextField } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { date } from 'yup';
import applicantApi from '../../api/applicantApi';
import recruiterApi from '../../api/recruiterApi';
import "./style.scss";

function UserUpdatePage() {
    const nav = useNavigate();
    const user = JSON.parse(localStorage.getItem('FWApp-gig:rememberedAccount'));
    const role = localStorage.getItem('role')
    const [date, setdate] = useState(Date.now());
    console.log('user', user)
    console.log('user', user.name);
    //const x = applicantApi.getID(user?.id)
    //console.log('x: ', x)
    const name = user?.name == undefined ? '' : user.name;
    const [data, setData] = useState({
        accountID: user?.id,
        //lastName: name.indexOf(' ') > -1 ? name.substring(0, name.indexOf(' ')) : name,
        //firstName: name.indexOf(' ') > -1 ? name.substring(name.indexOf(' ') + 1, name.length) : '',
    });
    console.log('x: ', data?.x)
    const [select, setSelect] = useState()
    const [repo, setRepo] = useState()
    const [loading, setLoading] = useState(true)
    const [fectch, setFectch] = useState([])
    // const [province, setProvince] = useState()
    const province = ["Thành phố Cần Thơ", "Thành phố Đà Nẵng", "Thành phố Hà Nội", "Thành phố Hải Phòng", "Thành phố Hồ Chí Minh", "Tỉnh An Giang", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bắc Giang", "Tỉnh Bắc Kạn", "Tỉnh Bạc Liêu", "Tỉnh Bắc Ninh", "Tỉnh Bến Tre", "Tỉnh Bình Định", "Tỉnh Bình Dương", "Tỉnh Bình Phước", "Tỉnh Bình Thuận", "Tỉnh Cà Mau", "Tỉnh Cao Bằng", "Tỉnh Đắk Lắk", "Tỉnh Đắk Nông", "Tỉnh Điện Biên", "Tỉnh Đồng Nai", "Tỉnh Đồng Tháp", "Tỉnh Gia Lai", "Tỉnh Hà Giang", "Tỉnh Hà Nam", "Tỉnh Hà Tĩnh", "Tỉnh Hải Dương", "Tỉnh Hậu Giang", "Tỉnh Hoà Bình", "Tỉnh Hưng Yên", "Tỉnh Khánh Hòa", "Tỉnh Kiên Giang", "Tỉnh Kon Tum", "Tỉnh Lai Châu", "Tỉnh Lâm Đồng", "Tỉnh Lạng Sơn", "Tỉnh Lào Cai", "Tỉnh Long An", "Tỉnh Nam Định", "Tỉnh Nghệ An", "Tỉnh Ninh Bình", "Tỉnh Ninh Thuận", "Tỉnh Phú Thọ", "Tỉnh Phú Yên", "Tỉnh Quảng Bình", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", "Tỉnh Quảng Ninh", "Tỉnh Quảng Trị", "Tỉnh Sóc Trăng", "Tỉnh Sơn La", "Tỉnh Tây Ninh", "Tỉnh Thái Bình", "Tỉnh Thái Nguyên", "Tỉnh Thanh Hóa", "Tỉnh Thừa Thiên Huế", "Tỉnh Tiền Giang", "Tỉnh Trà Vinh", "Tỉnh Tuyên Quang", "Tỉnh Vĩnh Long", "Tỉnh Vĩnh Phúc", "Tỉnh Yên Bái"]
    const [value, setValue] = useState(false);
    console.log(value);
    // useEffect(() => {
    //     setLoading(true)
    //     setProvince = axios.get(`https://gig-worker-backend.azurewebsites.net//Location/Province/ALL`)
    //         .then((res) => {
    //             const { data } = res;
    //             setProvince = data;
    //             console.log('province', province)
    //         })
    //     setLoading(false)
    // })
    console.log("province: ", province)
    useEffect(() => {
        const callApi = async () => {
            if (user?.role == "Applicant") {
                const userApi = await applicantApi.getID(user?.id);
                setData({
                    ...data,
                    firstName: userApi?.firstName,
                    lastName: userApi?.lastName,
                    available: userApi?.available,
                    address: userApi?.address,
                    phone: userApi?.phone,
                    gender: userApi?.gender,
                    description: userApi?.description
                })
                setLoading(false)
            }
            if (user?.role == "Recruiter") {
                const userApi = await recruiterApi.getID(user?.id);
                setData({
                    ...data,
                    firstName: userApi?.firstName,
                    lastName: userApi?.lastName,
                    available: userApi?.available,
                    address: userApi?.address,
                    phone: userApi?.phone,
                    gender: userApi?.gender,
                    description: userApi?.description
                })
                setLoading(false)
            }
        }
        callApi();

    }, [])
    useEffect(() => {
        if (data?.available == 1) setValue(true);
    })
    console.log(fetch)
    console.log(repo)
    const inputsHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const selectLocation = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        axios.get(`https://gig-worker-backend.azurewebsites.net/Location/City?province=${e.target.value}`)
            .then((res) => {
                const { data } = res;
                setFectch(data);
                console.log(fectch);
                console.log(data);
            })
    }
    const handlechange = (e) => {
        if (e.target.value == false) {
            setValue(true)
        } else {
            setValue(false)
        }
        const available = value == false ? 1 : 0
        setData({ ...data, available })
    }
    var url = "https://gig-worker-backend.azurewebsites.net/";
    const handleSubmit = (event) => {
        event.preventDefault(event)
        console.log('data', data)
        if (user.role == "Applicant")
            url = "https://gig-worker-backend.azurewebsites.net/Applicant/UpdateApp";
        else url = "https://gig-worker-backend.azurewebsites.net/Recruiter/UpdateRecruiter";
        try {
            axios.put(url,
                // axios.put(`http://localhost:8080/${user?.role}/Update`,
                data
            )
                .then(res => {
                    if (res.status == 200) {
                        alert("Update Success")
                        //nav('/')
                        // Navigate('/profile')
                    }
                    console.log(res.data)
                })
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }
        localStorage.removeItem('firebase:rememberedAccount')
        nav('/')
    }
    return (
        <Container>
            {loading === false ?
                <>
                    <Box className='intro-update' component='div'>
                        <h1>CẬP NHẬT THÔNG TIN NGƯỜI DÙNG</h1>
                    </Box>
                    <Box
                        component='form'
                        onSubmit={handleSubmit}
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                    >
                        <div className='head-intro-with-switch'>
                            <div className="switch-button">
                                {console.log("available: ", data)}
                                <Switch checked={value} onChange={handlechange} name='available' />
                            </div>
                            <div className='notice-switch'>
                                <p>Bật nút bên cạnh nếu bạn muốn thông tin của bạn công khai với nhà tuyển dụng</p>
                            </div>
                        </div>
                        {console.log("test: ", data?.lastName)}
                        <TextField variant='filled' name='lastName' label='Họ' defaultValue={data?.lastName} onChange={inputsHandler} />
                        <TextField variant='filled' name='firstName' label='Tên' defaultValue={data?.firstName} onChange={inputsHandler} />
                        <TextField variant='filled' name='address'
                            label='Địa chỉ'
                            defaultValue={data?.address != null && data?.address != undefined ? data?.address : ''}
                            onChange={inputsHandler} />
                        {/* <DatePicker
                    label="Basic example"
                    value={dateValue}
                    onChange={(newValue) => {
                        setDateValue(newValue);
                    }}
                    renderInput={(dateValue) => */}
                        {role == 'Applicant' && (<TextField name='dob' label='Ngày sinh' defaultValue="2017-05-24" onChange={inputsHandler} type="date" />)}
                        <TextField variant='filled' name='gender' label='Giới tính' onChange={inputsHandler} defaultValue={data?.gender} />
                        <TextField variant='filled' name='phone' label='Số điện thoại' onChange={inputsHandler} defaultValue={data?.phone} />
                        {role == 'Applicant' && (
                            <div>
                                <TextField
                                    select
                                    label="Chọn Tỉnh"
                                    // value={select}
                                    onChange={selectLocation}
                                    name='province'>
                                    {province?.map((option) => (
                                        <MenuItem key={option} value={option} >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    label="Chọn Thành phố/Quận/Huyện"
                                    onChange={inputsHandler}
                                    name='locationID'>
                                    {fectch?.map((option) => (
                                        <MenuItem key={option?.locationID} value={option?.locationID}>
                                            {option?.city}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                        )}
                        <TextField variant='filled' name='description' label='Mô tả' onChange={inputsHandler} defaultValue={data?.description} />
                        {/* <Button type='submit' >Cập nhật</Button> */}
                        <Box className="all-update-profile-button">
                            <Button className='update-button' type='submit' >Cập nhật</Button>
                            <Button className='cancel-button' type='button' onClick={() => nav('/')}>Bỏ qua</Button>
                        </Box>

                    </Box>
                </> :
                <Box></Box>}
        </Container >
    )
}

export default UserUpdatePage