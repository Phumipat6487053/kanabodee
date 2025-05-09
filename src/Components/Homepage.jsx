import React from 'react';
import './CSS/Homepage.css'; // นำเข้าไฟล์ CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Nark from './Image/นาค1.png';
import Wat from './Image/วัด.png';
import Bg from './Image/bg.png';
import Party from './Image/party.png';
import { faUtensils, faPrayingHands } from '@fortawesome/free-solid-svg-icons';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="slide">
                <div className="ordination-header">
                    <h2 className="ordination-title">กำหนดการพิธีอุปสมบท</h2>
                    <p className="ordination-date">๑๖ พฤษภาคม ๒๕๖๘ (แรม ๕ ค่ำ เดือน ๖)</p>
                </div>
                <img
                    src={Nark}
                    alt="ภาพนาคกับวัด"
                    className="ordination-image animated"
                />
            </div>

            <div className="slide text-section">
                <h1 className="title" style={{ fontSize: '30px' }}>นายคณบดี เเสงเมือง (อิศร์)</h1>
                <h2 className="subtitle" style={{ textAlign: 'center' }}>เจ้าภาพงาน</h2>
                <p>นายฉไน - นางอุทัย สว่างวงษ์ (คุณตา - คุณยาย)</p>
                <p>นางทองหลาง เเสงเมือง</p>
                <p>นายจีระศักดิ์ เเสงเมือง (บิดา - มารดา)</p>
                <p style={{ fontSize: '14px' }}>
                    พร้อมด้วยญาติพี่น้องทั้งหลายผู้มีอุปการะคุณแก่ผู้อุปสมบท
                </p>
                <p style={{ fontSize: '13px', fontStyle: 'italic' }}>
                    "ร่วมเป็นเจ้าภาพในครั้งนี้"
                </p>
            </div>

            <div className="slide text-section">
                <h2 className="subtitle">📅 กำหนดการรวม ๒ วัน</h2>
                <p>
                    <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '8px' }} />
                    วันที่ <strong>๑๕ พฤษภาคม ๒๕๖๘</strong> — เชิญร่วมงานเลี้ยงโต๊ะจีน
                </p>
                <p>
                    <FontAwesomeIcon icon={faPrayingHands} style={{ marginRight: '8px' }} />
                    วันที่ <strong>๑๖ พฤษภาคม ๒๕๖๘</strong> — พิธีอุปสมบท ณ วัดหอก่อง
                </p>
            </div>

            <div className="slide text-section">
                <h2 className="subtitle">🎉 เชิญร่วมงานเลี้ยงโต๊ะจีน</h2>
                <p className="schedule-date">
                    วันพฤหัสบดีที่ ๑๕ พฤษภาคม ๒๕๖๘ เวลา ๑๘.๐๐ น.
                </p>
                <img
                    src={Party}
                    alt="ภาพนาคกับวัด"
                    className="ordination-image"
                    style={{ marginTop: '10px', marginBottom: '20px' }}
                />
                <p className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> ณ บ้านเลขที่ ๒๒๒ หมู่ที่ ๘ ตำบลฟ้าหยาด อำเภอมหาชนะชัย จังหวัดยโสธร
                </p>
                <a
                    href="https://www.google.com/maps?q=15.5253794,104.2386229&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE2LjEuNzQ3NTI2NjMwMBgAIIgnKmMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAlRI&skid=1da0603f-2a75-430e-bb6f-8b9c3ba699ce&g_st=com.google.maps.preview.copy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                >
                    เปิดแผนที่งานเลี้ยง
                </a>
            </div>


            <div className="slide schedule">
                <h2 className="subtitle">กำหนดการอุปสมบท</h2>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>ณ อุโบสถวัดหอก่อง</span>

                    <a
                        href="https://www.google.com/maps/place/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%87/@15.5245087,104.2437018,17z/data=!3m1!4b1!4m6!3m5!1s0x3117b28b14855f8d:0xa85d30d240b44d60!8m2!3d15.5245087!4d104.2437018!16s%2Fg%2F1hcb48rqd?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-tem-link"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        ดูแผนที่วัดหอก่อง
                    </a>
                </p>
                <img
                    src={Wat}
                    alt="ภาพนาคกับวัด"
                    className="ordination-image animated"
                />

                <p className="schedule-date">
                    วันศุกร์ที่ ๑๖ พฤษภาคม ๒๕๖๘ (แรม ๕ ค่ำ เดือน ๖)
                </p>
                <ul className="schedule-list">
                    <li>🧘 เวลา ๐๗.๐๐ น. — ทำบุญตักบาตรและถวายภัตตาหารเช้า</li>
                    <li>📿 เวลา ๐๘.๐๐ น. — พิธีตั้งกองบวช</li>
                    <li>🍛 เวลา ๐๘.๓๐ น. — ขอเชิญร่วมรับประทานอาหาร</li>
                    <li>✂️ เวลา ๐๙.๐๐ น. — พิธีปลงผมนาค</li>
                    <li>🌾 เวลา ๑๐.๐๐ น. — พิธีบายศรีสู่ขวัญนาค</li>
                    <li>
                        🛕 เวลา ๑๔.๐๐ น. — แห่นาครอบหมู่บ้านและนำนาคไปเข้าพิธีอุปสมบท

                    </li>
                </ul>
            </div>
            <div className="slide text-section">
                <p className="location">
                    <h2 className="subtitle">สถานที่ตั้งกองบวช</h2>
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '8px' }} />
                    ตั้งกองบวช ณ บ้านเลขที่ ๒๒๒ หมู่ที่ ๘ ตำบลฟ้าหยาด อำเภอมหาชนะชัย จังหวัดยโสธร
                </p>

                <a
                    href="https://www.google.com/maps?q=15.5253794,104.2386229&entry=gps&lucs=,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE2LjEuNzQ3NTI2NjMwMBgAIIgnKmMsOTQyMjQ4MjUsOTQyMjcyNDcsOTQyMjcyNDgsOTQyMzExODgsNDcwNzE3MDQsNDcwNjk1MDgsOTQyMTg2NDEsOTQyMDMwMTksNDcwODQzMDQsOTQyMDg0NTgsOTQyMDg0NDdCAlRI&skid=1da0603f-2a75-430e-bb6f-8b9c3ba699ce&g_st=com.google.maps.preview.copy" // เปลี่ยนเป็นลิงก์จริง
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-link"
                >
                    ดูแผนที่
                </a>
            </div>
            <div className="invitation-banner">
                <p>
                    จึงขอกราบเรียนเชิญ<strong> ญาติมิตรเเละท่านที่เคารพนับถือ </strong>
                    ร่วมอนุโมทนาบุญงานอุปสมบทในครั้งนี้ <br />
                    เพื่อความเป็นสิริมงคลแก่ชีวิตของนาค ณ สถานที่และเวลาดังกล่าว
                </p>
                <img
                    src={Bg}
                    alt="ภาพนาคกับวัด"
                    style={{ width: '600px', height: '' }}
                    className="ordination-image animated"
                />
            </div>
        </div>
    );
};

export default Homepage;
