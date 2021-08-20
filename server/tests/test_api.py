# Imports
import pytest

from app import app


# Tests
class TestApi:
    @pytest.fixture
    def client(self):
        app.config["TESTING"] = True
        with app.test_client() as client:
            yield client

    def client_response(self, client, endpoint, data):
        return client.post(
            endpoint,
            json=data,
        )

    def test_nonexistent_endpoint(self, client):
        # Arrange
        endpoint = "/nonexistent/endpoint"
        data = {}
        # Act
        response = self.client_response(client, endpoint, data)
        # Assert
        assert response.status_code == 404
