import requests

cookies = {'tm_session': 'test'}
data = {'config': '{"job_description": "test"}'}
files = [('files', ('dummy.txt', b'this is a test resume for Elena Kozlova', 'text/plain'))]

res = requests.post('http://127.0.0.1:8000/api/evaluate', data=data, files=files, cookies=cookies)
print("Status Code:", res.status_code)
try:
    print(res.json())
except Exception as e:
    print("JSON Error:", str(e))
    print("Text:", res.text)
