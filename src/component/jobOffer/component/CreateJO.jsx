import { Button, MenuItem, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jobOfferApi from '../../../api/JobOffer';
const provivince = ["Thành phố Cần Thơ", "Thành phố Đà Nẵng", "Thành phố Hà Nội", "Thành phố Hải Phòng", "Thành phố Hồ Chí Minh", "Tỉnh An Giang", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bắc Giang", "Tỉnh Bắc Kạn", "Tỉnh Bạc Liêu", "Tỉnh Bắc Ninh", "Tỉnh Bến Tre", "Tỉnh Bình Định", "Tỉnh Bình Dương", "Tỉnh Bình Phước", "Tỉnh Bình Thuận", "Tỉnh Cà Mau", "Tỉnh Cao Bằng", "Tỉnh Đắk Lắk", "Tỉnh Đắk Nông", "Tỉnh Điện Biên", "Tỉnh Đồng Nai", "Tỉnh Đồng Tháp", "Tỉnh Gia Lai", "Tỉnh Hà Giang", "Tỉnh Hà Nam", "Tỉnh Hà Tĩnh", "Tỉnh Hải Dương", "Tỉnh Hậu Giang", "Tỉnh Hoà Bình", "Tỉnh Hưng Yên", "Tỉnh Khánh Hòa", "Tỉnh Kiên Giang", "Tỉnh Kon Tum", "Tỉnh Lai Châu", "Tỉnh Lâm Đồng", "Tỉnh Lạng Sơn", "Tỉnh Lào Cai", "Tỉnh Long An", "Tỉnh Nam Định", "Tỉnh Nghệ An", "Tỉnh Ninh Bình", "Tỉnh Ninh Thuận", "Tỉnh Phú Thọ", "Tỉnh Phú Yên", "Tỉnh Quảng Bình", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", "Tỉnh Quảng Ninh", "Tỉnh Quảng Trị", "Tỉnh Sóc Trăng", "Tỉnh Sơn La", "Tỉnh Tây Ninh", "Tỉnh Thái Bình", "Tỉnh Thái Nguyên", "Tỉnh Thanh Hóa", "Tỉnh Thừa Thiên Huế", "Tỉnh Tiền Giang", "Tỉnh Trà Vinh", "Tỉnh Tuyên Quang", "Tỉnh Vĩnh Long", "Tỉnh Vĩnh Phúc", "Tỉnh Yên Bái"]
function CreateJO() {
    const id = 2
    const [select, setSelect] = useState()
    const [repo, setRepo] = useState()
    const [loading, setLoading] = useState()
    const [fectch, setFectch] = useState('')
    const [data, setData] = useState({
        jobname: '',
        jobtype: '',
        location: '',
        business: '',
        numofrecruit: '',
        offerendtime: '',
        salary: '',
        age: '',
        jobdescription: '',
        orther: '',
        strattime: '',
        endtime: '',
        address: ''
    })
    useEffect(() => {
        setLoading(true)
        console.log(1);
        axios.get(`https://gig-worker-backend.azurewebsites.net/Location/City?province=${select}`)
            .then((res) => {
                console.log(2);
                const { data } = res;
                setFectch(data);
                console.log('fecth');
                console.log(fectch);
                console.log(data);
                setLoading(false)
            })
    }, [select])
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const joblocation = await jobOfferApi.getJobType(id);
            setRepo(joblocation);
            setLoading(false)
        }
        fetchData();
    }, []);
    console.log(JSON.stringify(select))
    const inputsHandler = (e) => {
        setSelect(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    console.log(select)
    console.log(fetch)
    // console.log(data)
    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            jobOfferApi.add(data);
            alert('Thêm thành công')
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }

    }
    return (
        <Container>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField label="Name" variant="standard" onChange={inputsHandler} name='jobname' />
                <TextField label="Phone" variant="standard" onChange={inputsHandler} name='jobtype' />
                <TextField label="Email" variant="standard" onChange={inputsHandler} name='location' />
                <TextField
                    select
                    label="provivince"
                    // value={select}
                    onChange={inputsHandler}
                    name='provivince'>
                    {provivince.map((option) => (
                        <MenuItem key={option} value={option} >
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="provivince City"
                    value={fetch?.locationid}
                    onChange={inputsHandler}
                    name='provivince'>
                    {provivince.map((option) => (
                        <MenuItem key={fetch?.locationid} value={fetch?.locationid}>
                            {fectch?.city}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField />


                <Button type='submit'>submit</Button>
            </Box>
        </Container>
    )
}

export default CreateJO