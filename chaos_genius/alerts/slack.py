from slack_sdk.webhook import WebhookClient
from dotenv import dotenv_values

config = dotenv_values(".env")
url = config.get("SLACK_WEBHOOK_URL")
webhook = WebhookClient(url)

response = webhook.send(
    text="fallback",
    blocks=[
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Anomaly Alert from Chaos Genius ",
				"emoji": True
			}
		},
		{
			"type": "section",
			"text": {
				"type": "plain_text",
				"text": "There are some new anomaly found in some of the KPI.",
				"emoji": True
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*KPI:*\nConversion Rate\n*Value:*\n10\n*When:*\nJuly 20\n*Comments:* \"View Drill Down for more info!\""
			},
			"accessory": {
				"type": "image",
				"image_url": "https://user-images.githubusercontent.com/20757311/126447967-c9f09b9a-d917-4f3f-bc69-94c3318705fe.png",
				"alt_text": "cute cat"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Click here to open the drilldowns in dashboard."
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Dashboard",
					"emoji": True
				},
				"value": "click_me_123",
				"url": "https://chaosgenius.mayhemdata.com/#/dashboard",
				"action_id": "button-action"
			}
		},
		{
			"type": "image",
			"title": {
				"type": "plain_text",
				"text": "Anomaly Found",
				"emoji": True
			},
			"image_url": "https://user-images.githubusercontent.com/20757311/126447329-a30e0b23-bf21-49c1-a029-d8de7691ef0f.png",
			"alt_text": "marg"
		}
    ]
)
print(response.body)