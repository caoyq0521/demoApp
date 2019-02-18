const SERVER_URL = 'http://192.168.0.226:8909/api/V1.0';

function post(url, data, successCallback) {
    api.ajax({
        headers: {
            "X-APICloud-AppId": "A6005584828914",
            "X-APICloud-AppKey": "FCD9627E-F21A-8BA8-367A-21ADDD4A3820"
        },
        url: SERVER_URL + url,
        method: 'post',
        data: data,
    }, function(ret, err) {
        if (ret) {
            successCallback(ret)
        } else {
            alert(JSON.stringify(err));
        }
    });
}