from djchoices import DjangoChoices, ChoiceItem


class WhenChoice(DjangoChoices):
    TODAY = ChoiceItem('TD')
    THIS_WEEK = ChoiceItem('TW')
    THIS_MONTH = ChoiceItem('TM')
