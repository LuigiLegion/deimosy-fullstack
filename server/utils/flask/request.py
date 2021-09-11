# Imports
from simplejson import loads


# Initializations
def request_body(request) -> dict:
    """Extracts and deserializes request body from Flask request."""

    return loads(loads(request.get_data()).get("body"))
