import { Button, MenuItem, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jobOfferApi from '../../../api/JobOffer';
const provivince = ["Thành phố Cần Thơ", "Thành phố Đà Nẵng", "Thành phố Hà Nội", "Thành phố Hải Phòng", "Thành phố Hồ Chí Minh", "Tỉnh An Giang", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bắc Giang", "Tỉnh Bắc Kạn", "Tỉnh Bạc Liêu", "Tỉnh Bắc Ninh", "Tỉnh Bến Tre", "Tỉnh Bình Định", "Tỉnh Bình Dương", "Tỉnh Bình Phước", "Tỉnh Bình Thuận", "Tỉnh Cà Mau", "Tỉnh Cao Bằng", "Tỉnh Đắk Lắk", "Tỉnh Đắk Nông", "Tỉnh Điện Biên", "Tỉnh Đồng Nai", "Tỉnh Đồng Tháp", "Tỉnh Gia Lai", "Tỉnh Hà Giang", "Tỉnh Hà Nam", "Tỉnh Hà Tĩnh", "Tỉnh Hải Dương", "Tỉnh Hậu Giang", "Tỉnh Hoà Bình", "Tỉnh Hưng Yên", "Tỉnh Khánh Hòa", "Tỉnh Kiên Giang", "Tỉnh Kon Tum", "Tỉnh Lai Châu", "Tỉnh Lâm Đồng", "Tỉnh Lạng Sơn", "Tỉnh Lào Cai", "Tỉnh Long An", "Tỉnh Nam Định", "Tỉnh Nghệ An", "Tỉnh Ninh Bình", "Tỉnh Ninh Thuận", "Tỉnh Phú Thọ", "Tỉnh Phú Yên", "Tỉnh Quảng Bình", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", "Tỉnh Quảng Ninh", "Tỉnh Quảng Trị", "Tỉnh Sóc Trăng", "Tỉnh Sơn La", "Tỉnh Tây Ninh", "Tỉnh Thái Bình", "Tỉnh Thái Nguyên", "Tỉnh Thanh Hóa", "Tỉnh Thừa Thiên Huế", "Tỉnh Tiền Giang", "Tỉnh Trà Vinh", "Tỉnh Tuyên Quang", "Tỉnh Vĩnh Long", "Tỉnh Vĩnh Phúc", "Tỉnh Yên Bái"]
function CreateJO() {
    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    const [select, setSelect] = useState()
    const [repo, setRepo] = useState()
    const [loading, setLoading] = useState()
    const [city, setCity] = useState()
    const [fectch, setFectch] = useState([])
    const [data, setData] = useState({
        accountID: user.id,
    })
    useEffect(() => {
        setLoading(true)
        axios.get(`https://gig-worker-backend.azurewebsites.net/Location/City?province=${select}`)
            .then((res) => {
                const { data } = res;
                setFectch(data);
                console.log(fectch);
                console.log(data);
                setLoading(false)
            })
    }, [select])
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const joblocation = await jobOfferApi.getJobType(user?.id);
            setRepo(joblocation);
            setLoading(false)
        }
        fetchData();
    }, []);
    console.log(repo)
    const inputsHandler = (e) => {
        setSelect(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const selectLocation = (e) => {
        setCity(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })
    }
    // console.log(select)
    // console.log(fetch)
    console.log(data)
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
                <TextField label="Số lượng cần tuyển:" variant="standard" onChange={inputsHandler} name='numofrecruiter' />
                <TextField label="Thời hạn kết thúc đăng tuyển:" variant="standard" onChange={inputsHandler} name='offerendtime' />
                <TextField label="Lương (theo giờ):" variant="standard" onChange={inputsHandler} name='salary' />
                <TextField label="Độ tuổi tối thiểu:" variant="standard" onChange={inputsHandler} name='age' />
                <TextField label="Mô tả công việc:" variant="standard" onChange={inputsHandler} name='jobdescription' />
                <TextField label="Yêu cầu khác:" variant="standard" onChange={inputsHandler} name='other' />
                <TextField label="Thời gian bắt đầu làm việc:" variant="standard" onChange={inputsHandler} name='starttime' />
                <TextField label="Thời gian kết thúc công việc:" variant="standard" onChange={inputsHandler} name='endtime' />
                <TextField label="Địa chỉ:" variant="standard" onChange={inputsHandler} name='address' />

                <TextField
                    select
                    label="Chọn Tỉnh"
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
                    label="Chọn Thành phố/Quận/Huyện"
                    onChange={selectLocation}
                    name='provivince city'>
                    {fectch?.map((option) => (
                        <MenuItem key={option?.locationID} value={option?.locationID}>
                            {option?.city}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Chọn địa chỉ doanh nghiệp"
                    onChange={selectLocation}
                    name='businessAddresses'>
                    {repo?.businessAddresses?.map((option) => (
                        <MenuItem key={option?.businessID} value={option?.businessID}>
                            {option?.address}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Chọn bằng cấp"
                    onChange={selectLocation}
                    name='degreeNames'>
                    {repo?.degreeNames?.map((option) => (
                        <MenuItem key={option?.degreeID} value={option?.degreeID}>
                            {option?.degreeName}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Chọn tên công việc"
                    onChange={selectLocation}
                    name='jobNames'>
                    {repo?.jobNames?.map((option) => (
                        <MenuItem key={option?.typeID} value={option?.typeID}>
                            {option?.name}
                        </MenuItem>
                    ))}
                </TextField>

                <Button type='submit'>submit</Button>
            </Box>
        </Container>
    )
}

export default CreateJO