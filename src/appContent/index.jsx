import {
  Button,
  Card,
  Carousel,
  Col,
  Dropdown,
  Input,
  Row,
  Segmented,
  Space, 
  Table,
  Typography,
} from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  cardData,
  columns,
  dataSource,
  gameShows,
  liveCasino,
  newReleases,
  providers,
  slots,
  stakeExclusives,
  stakeOrignals,
} from "../common";

const AppContent = () => {
  const { Text } = Typography;

  const items = [
    {
      label: 0,
      key: "0",
    },
    {
      label: 10,
      key: "1",
    },
    {
      label: 20,
      key: "3",
    },
    {
      label: 30,
      key: "4",
    },
    {
      label: 40,
      key: "5",
    },
    {
      label: 50,
      key: "5",
    },
  ];

  return (
    <Row>
      <Col>
        <Carousel arrows>
          <div>
            <div className="d-flex justify-between mt-10">
              {cardData.map((data) => {
                return (
                  <Card
                    style={{ width: 400, height: 240 }}
                    className="cardStyle"
                  >
                    <Row justify={"space-between"}>
                      <Col span={10}>
                        <Row>
                          <Button className="cardTitleButton">
                            {data.cardTitle}
                          </Button>
                        </Row>
                        <Row className="font-size-20 font-weight-500 mt-10">
                          {data.name}
                        </Row>
                        <Row>{data.description}</Row>
                        <Row>
                          <Button
                            className={`${
                              data.buttonName === "Play Now"
                                ? "mt-35"
                                : data.buttonName === "Race Now"
                                ? "mt-65"
                                : "mt-65"
                            } playButton font-weight-500`}
                          >
                            {data.buttonName}
                          </Button>
                        </Row>
                      </Col>
                      <Col span={12}>
                        <img
                          src={data.imageAddress}
                          alt="noimage"
                          width={200}
                          height={230}
                        />
                      </Col>
                    </Row>
                  </Card>
                );
              })}
            </div>
          </div>
          <div>
            <div className="d-flex justify-between mt-10">
              {cardData.map((data) => {
                return (
                  <Card
                    style={{ width: 400, height: 240 }}
                    className="cardStyle"
                  >
                    <Row justify={"space-between"}>
                      <Col span={10}>
                        <Row>
                          <Button className="cardTitleButton">
                            {data.cardTitle}
                          </Button>
                        </Row>
                        <Row className="font-size-20 font-weight-500 mt-10">
                          {data.name}
                        </Row>
                        <Row>{data.description}</Row>
                        <Row>
                          <Button
                            className={`${
                              data.buttonName === "Play Now"
                                ? "mt-35"
                                : data.buttonName === "Race Now"
                                ? "mt-65"
                                : "mt-65"
                            } playButton font-weight-500`}
                          >
                            {data.buttonName}
                          </Button>
                        </Row>
                      </Col>
                      <Col span={12}>
                        <img
                          src={data.imageAddress}
                          alt="noimage"
                          width={200}
                          height={230}
                        />
                      </Col>
                    </Row>
                  </Card>
                );
              })}
            </div>
          </div>
        </Carousel>

        <Row>
          <Input
            className="mt-10 searchbarstyle"
            addonBefore={<FaSearch size={17} />}
            placeholder="Search your game"
          />
        </Row>
        <Row>
          <Segmented
            style={{ width: "80%" }}
            size="large"
            options={[
              "Lobby",
              "Stake Originals",
              "Slots",
              "Live Casino",
              "Game Shows",
              "Stake Exclusives",
              "New Releases",
            ]}
          />
        </Row>

        <Row>
          <Col className="mt-20">
            <Text className="color-white font-size-20 font-weight-500">
              Stake Originals
            </Text>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          {stakeOrignals.map((data) => {
            return (
              <Row>
                <Col>
                  <Row>
                    <img
                      src={data.imageAddress}
                      alt="noimage"
                      width={150}
                      className="border-radius-8 mt-10"
                    />
                  </Row>
                  <Row>
                    {" "}
                    <Text className="color-white mt-3 font-weight-500">
                      {data.playingList}
                    </Text>
                    <Text className="color-grey mt-3 font-weight-500 ml-5">
                      {" "}
                      playing
                    </Text>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Row>

        <Row>
          <Col className="mt-20">
            <Text className="color-white font-size-20 font-weight-500">
              Slots
            </Text>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          {slots.map((data) => {
            return (
              <Row>
                <Col>
                  <Row>
                    <img
                      src={data.imageAddress}
                      alt="noimage"
                      width={150}
                      className="border-radius-8 mt-10"
                    />
                  </Row>
                  <Row>
                    {" "}
                    <Text className="color-white mt-3 font-weight-500">
                      {data.playingList}
                    </Text>
                    <Text className="color-grey mt-3 font-weight-500 ml-5">
                      {" "}
                      playing
                    </Text>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Row>

        <Row>
          <Col className="mt-20">
            <Text className="color-white font-size-20 font-weight-500">
              Providers
            </Text>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          {providers.map((data) => {
            return (
              <img
                src={data}
                alt="noimage"
                width={150}
                className="border-radius-8 mt-10"
              />
            );
          })}
        </Row>

        <Row>
          <Col className="mt-20">
            <Text className="color-white font-size-20 font-weight-500">
              Live Casino
            </Text>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          {liveCasino.map((data) => {
            return (
              <img
                src={data}
                alt="noimage"
                width={150}
                className="border-radius-8 mt-10"
              />
            );
          })}
        </Row>

        <Row>
          <Col className="mt-20">
            <Text className="color-white font-size-20 font-weight-500">
              Game Shows
            </Text>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          {gameShows.map((data) => {
            return (
              <Row>
                <Col>
                  <Row>
                    <img
                      src={data.imageAddress}
                      alt="noimage"
                      width={150}
                      className="border-radius-8 mt-10"
                    />
                  </Row>
                  <Row>
                    {" "}
                    <Text className="color-white mt-3 font-weight-500">
                      {data.playingList}
                    </Text>
                    <Text className="color-grey mt-3 font-weight-500 ml-5">
                      {" "}
                      playing
                    </Text>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Row>

        <Row>
          <Col className="mt-20">
            <Text className="color-white font-size-20 font-weight-500">
              Stack Exclusives
            </Text>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          {stakeExclusives.map((data) => {
            return (
              <Row>
                <Col>
                  <Row>
                    <img
                      src={data.imageAddress}
                      alt="noimage"
                      width={150}
                      className="border-radius-8 mt-10"
                    />
                  </Row>
                  <Row>
                    {" "}
                    <Text className="color-white mt-3 font-weight-500">
                      {data.playingList}
                    </Text>
                    <Text className="color-grey mt-3 font-weight-500 ml-5">
                      {" "}
                      playing
                    </Text>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Row>

        <Row>
          <Col className="mt-20">
            <Text className="color-white font-size-20 font-weight-500">
              New Releases
            </Text>
          </Col>
        </Row>
        <Row justify={"space-between"}>
          {newReleases.map((data) => {
            return (
              <Row>
                <Col>
                  <Row>
                    <img
                      src={data.imageAddress}
                      alt="noimage"
                      width={150}
                      className="border-radius-8 mt-10"
                    />
                  </Row>
                  <Row>
                    {" "}
                    <Text className="color-white mt-3 font-weight-500">
                      {data.playingList}
                    </Text>
                    <Text className="color-grey mt-3 font-weight-500 ml-5">
                      {" "}
                      playing
                    </Text>
                  </Row>
                </Col>
              </Row>
            );
          })}
        </Row>

        <Row justify={"space-between"}>
          <Col>
            <Segmented
              style={{ width: "125%", marginTop: "30px" }}
              size="large"
              options={[
                "My Bets",
                "All Bets",
                "High Rollers",
                "Race LeaderBoard",
              ]}
            />
          </Col>
          <Col>
            <Row justify={"space-between"}>
              <Col span={10}>
                <Button className="mt-30 guestButton font-weight-500">
                  Ghost mode off
                </Button>
              </Col>
              <Col span={8}>
                <Button className="mt-30 dropdownButton">
                  {" "}
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <div>
                      <Space>
                        10
                        <MdKeyboardArrowDown className="mt-6" />
                      </Space>
                    </div>
                  </Dropdown>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "even-row color-white" : "odd-row color-white"
          }
          style={{ width: "100%" }}
        />
      </Col>
    </Row>
  );
};

export default AppContent;
