import requests
cookies = {'tm_session': 'test'}
data = {'config': '{"job_description": "test"}'}
res = requests.post('http://127.0.0.1:8000/api/evaluate', data=data, cookies=cookies)
print(res.status_code)
print(res.text)
