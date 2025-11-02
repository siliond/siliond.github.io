import requests
from bs4 import BeautifulSoup
url = 'https://www.wholefoodsmarket.com/stores/mckinney'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
print(soup.get_text())