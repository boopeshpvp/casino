import React from "react";
import { Typography, Row, Col, Space, Select, Divider } from "antd";
import { footerIcon, footerImage } from "../common";

const { Title, Text, Link } = Typography;
const { Option } = Select; 

const AppFooter = () => {
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <Row>
              <Text className="color-white footerTitle font-weight-500">
                Stake
              </Text>
            </Row>
            <Row className="color-grey">
              © 2024 Stake.com | All Rights Reserved.
            </Row>
          </Col>
        </Row>
        <Divider
          style={{ background: "#213743", padding: "0.5px", width: "80vw" }}
        />
        <Row justify={"space-between"}>
          <Col>
            <Title level={5} style={{ color: "#ffffff" }}>
              Casino
            </Title>
            <Space
              direction="vertical"
              style={{ color: "#afb8d0", fontWeight: 500 }}
            >
              <div>Casino Games</div>
              <div>Slots</div>
              <div>Live Casino</div>
              <div>Roulette</div>
              <div>Blackjack</div>
              <div>Providers</div>
              <div>Promos & Competitions</div>
            </Space>
          </Col>

          <Col>
            <Title level={5} style={{ color: "#ffffff" }}>
              Sports
            </Title>
            <Space
              direction="vertical"
              style={{ color: "#afb8d0", fontWeight: 500 }}
            >
              <div>Sportsbook</div>
              <div>Live Sports</div>
              <div>Soccer</div>
              <div>Basketball</div>
              <div>Tennis</div>
              <div>eSports</div>
              <div>Bet Bonuses</div>
              <div>Sports Rules</div>
              <div>Racing Rules</div>
            </Space>
          </Col>

          <Col>
            <Title level={5} style={{ color: "#ffffff" }}>
              Support
            </Title>
            <Space
              direction="vertical"
              style={{ color: "#afb8d0", fontWeight: 500 }}
            >
              <div>Help Center</div>
              <div>Fairness</div>
              <div>Gamble Aware</div>
              <div>Live Support</div>
              <div>Self Exclusion</div>
            </Space>
          </Col>

          <Col>
            <Title level={5} style={{ color: "#ffffff" }}>
              About Us
            </Title>
            <Space
              direction="vertical"
              style={{ color: "#afb8d0", fontWeight: 500 }}
            >
              <div>VIP Club</div>
              <div>Affiliate</div>
              <div>Privacy Policy</div>
              <div>AML Policy</div>
              <div>Terms of Service</div>
            </Space>
          </Col>

          <Col>
            <Title level={5} style={{ color: "#ffffff" }}>
              Payment Info
            </Title>
            <Space
              direction="vertical"
              style={{ color: "#afb8d0", fontWeight: 500 }}
            >
              <div>Deposit & Withdrawals</div>
              <div>Currency Guide</div>
              <div>Crypto Guide</div>
              <div>Supported Crypto</div>
              <div>How to Use the Vault</div>
              <div>How Much to Bet With</div>
            </Space>
          </Col>

          <Col>
            <Title level={5} style={{ color: "#ffffff" }}>
              How-to Guides
            </Title>
            <Space
              direction="vertical"
              style={{ color: "#afb8d0", fontWeight: 500 }}
            >
              <div>Online Casino Guide</div>
              <div>Sports Betting Guide</div>
              <div>How to Live Stream Sports</div>
              <div>Stake VIP Guide</div>
              <div>House Edge Guide</div>
            </Space>
          </Col>
          <Col>
            <Row>
              <Select
                defaultValue="English"
                style={{ width: 130, marginTop: "25px", height: 45 }}
              >
                <Option value="English">English</Option>
                <Option value="Spanish">Spanish</Option>
              </Select>
            </Row>
            <Row>
              <Select
                defaultValue="Decimal"
                style={{ width: 130, marginTop: "20px", height: 45 }}
              >
                <Option value="Decimal">Decimal</Option>
                <Option value="Fraction">Fraction</Option>
              </Select>
            </Row>
            <Row>
              <Text className="mt-10 color-grey">1 BTC = $75,987.84</Text>
            </Row>
          </Col>
        </Row>

        <Divider
          style={{ background: "#213743", padding: "0.5px", width: "80vw" }}
        />
        <Row justify={"space-between"} gutter={[0, 50]}>
          {footerIcon.map((data) => {
            return (
              <Col span={4}>
                <img src={data} alt="noimage" width={150} />
              </Col>
            );
          })}
        </Row>
        <Divider
          style={{ background: "#213743", padding: "0.5px", width: "80vw" }}
        />
        <Row justify={"space-around"}>
          {footerImage.map((data) => {
            return <img src={data} alt="noimage" width={150} />;
          })}
        </Row>
        <Divider
          style={{ background: "#213743", padding: "0.5px", width: "80vw" }}
        />

        <Row justify="center" style={{ textAlign: "center" }}>
          <Col span={24}>
            <Row justify={"center"}>
              <Text style={{ color: "#a0a0a0" }}>
                Stake is committed to responsible gambling, for more information
                visit{" "}
                <Link href="https://www.gamblingtherapy.org">
                  Gamblingtherapy.org
                </Link>
              </Text>
            </Row>
            <Row justify={"center"}>
              <Text style={{ color: "#a0a0a0", marginTop: 30 }}>
                Stake is owned and operated by Medium Rare N.V., registration
                number: 145353, registered address: Korporaalweg 10, Willemstad,
                Curaçao. Contact us at support@stake.com. Payment agent company
                is Medium Rare Limited with address 7-9 Riga Feraiou, LIZANTIA
                COURT, Office 310, Agioi Omologites, 1087 Nicosia, Cyprus and
                Registration number: HE 410775
              </Text>
            </Row>
            <Row justify={"center"}>
              <Text style={{ color: "#a0a0a0", marginTop: 30 }}>
                Support <Text className="color-white">support@stake.com</Text> |
                Partners <Text className="color-white">partners@stake.com</Text>{" "}
                | Press <Text className="color-white">press@stake.com</Text>
              </Text>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AppFooter;
