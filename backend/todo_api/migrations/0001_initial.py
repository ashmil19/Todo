# Generated by Django 4.0.5 on 2022-07-05 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TodoListItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(help_text='This field is required', max_length=100)),
                ('isDone', models.BooleanField(default=False)),
                ('when', models.CharField(choices=[('TD', 'TODAY'), ('TW', 'THIS WEEK'), ('TM', 'THIS MONTH')], default='TD', max_length=100)),
            ],
        ),
    ]
