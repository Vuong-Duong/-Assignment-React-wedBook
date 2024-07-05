import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Pie, Bar } from 'react-chartjs-2';


export default function AdminDashboard({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form logic here
  };

  const newOrdersData = {
    labels: ['Success', 'Cancelled', 'Pending'],
    datasets: [{
      label: 'New Orders',
      data: [data.order_success, data.order_cancel, data.order_pending],
      backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(255, 206, 86, 0.7)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1
    }]
  };

  const revenuesData = {
    labels: ['Previous year', 'This year'],
    datasets: [{
      label: 'Revenues',
      data: [data.total_prev, data.total_now],
      backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1
    }]
  };

  const customersData = {
    labels: ['User', 'Order', 'Feedback'],
    datasets: [{
      label: 'System',
      data: [data.user_count, data.order_success + data.order_pending, data.feedback_count],
      backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
      borderWidth: 1
    }]
  };

  const orderTrendData = {
    labels: ['Success', 'Cancelled', 'Pending'],
    datasets: [{
      label: 'Trend Orders',
      data: [data.order_success_filter, data.order_cancel_filter, data.order_pending_filter],
      backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)', 'rgba(255, 206, 86, 0.7)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1
    }]
  };

  return (
    <Container className="text-center" style={{ marginLeft: '11%' }}>
      <h1 className="mb-4">Admin Dashboard</h1>
      <Row>
        <Col md={6} className="mb-4 p-3">
          <h3>New Orders</h3>
          <Pie data={newOrdersData} />
        </Col>
        <Col md={6} className="mb-4 p-3">
          <h3>Revenues</h3>
          <Bar data={revenuesData} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6} className="p-3">
          <h3>Customers</h3>
          <Bar data={customersData} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="mb-4">
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>Start Date:</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>End Date:</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Form.Row>
            <Button type="submit" className="btn btn-primary">Filter</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>Order Trend</h2>
          <Bar data={orderTrendData} />
        </Col>
      </Row>
    </Container>
  );
}


