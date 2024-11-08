import { Button, Col, Row, Typography } from "antd";
import React from "react";

const AppHeader = () => {
  const { Text } = Typography;
  return (
    <Row className="justify-between">
      <Col>
        <Text className="color-white headerTitle font-weight-500">Stake</Text>
      </Col>
      <Col>
        <Row>
          <Col span={12} className="color-white font-weight-500">
            Sign In
          </Col>
          <Col span={12}>
            <Button className="buttonColor font-weight-500">Register</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default AppHeader;
