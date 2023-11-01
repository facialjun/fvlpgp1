import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko'; // 한국어 로케일 추가
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import '../css/customDatePicker.css';
import videoSource from '../assets/images/Bronze.mp4'; // Import the video

const Home = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const submitForm = async () => {
        const data = {
            name: name,
            phoneNumber: phoneNumber,
            selectedDate: selectedDate,
        };

        try {
            const response = await axios.post('http://localhost:8080/info/submit', data); // 변경된 서버 주소
            console.log('Data submitted:', response.data);
            alert('제출에 성공했습니다!');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh',backgroundColor:'rgba(131,149,242,1)'}}>
            <video
                style={{
                    width: '95%',
                    height: '100%',
                    objectFit: 'contain',
                }}
                autoPlay
                loop
                muted
            >
                <source src={videoSource} type="video/mp4" />
            </video>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'inline-block', textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '15px', borderRadius: '20px',height:'15vh' }}>
                    <div style={{ marginRight: '20px', color: 'white' }}>
                        <h2>이름</h2>
                        <input
                            style={{ width: '120px', textAlign: 'center' }}
                            type="text"
                            placeholder="이름"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div style={{ marginRight: '20px', color: 'white' }}>
                        <h2>전화번호</h2>
                        <input
                            style={{ width: '120px', textAlign: 'center' }}
                            type="text"
                            placeholder="전화번호(-)없이"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </div>

                    <div style={{ color: 'white' }}>
                        <h2>방문가능시간</h2>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            showTimeSelect
                            dateFormat="M월 d일 H시 mm분"
                            locale={ko}
                            placeholderText="날짜 선택" // 원하는 문구 설정
                        />
                    </div>
                    

                    
                </div>
            </div>
        </div>

                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <button
                            style={{
                                backgroundColor: 'lightblue',
                                padding: '3px 25px',
                                cursor: 'pointer',
                                borderRadius: '10px',
                                marginTop: '20px',
                                color: 'green',
                                marginBottom:'4%'
                            }}
                            onClick={submitForm}
                        >
                            <h2 style={{fontSize:15,fontWeight:'bold'}}>제출하기</h2>
                        </button>
                    </div>


        </div>
    );
};

export default Home;
