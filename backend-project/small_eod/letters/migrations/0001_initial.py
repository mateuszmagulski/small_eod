# Generated by Django 3.0.1 on 2020-01-09 13:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('institutions', '0001_initial'),
        ('channels', '0001_initial'),
        ('cases', '0002_case_auditedinstitution'),
    ]

    operations = [
        migrations.CreateModel(
            name='Description',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Letter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modified_on', models.DateTimeField(auto_now=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('direction', models.TextField(choices=[('IN', 'Received'), ('OUT', 'Sent')], default='IN', max_length=3)),
                ('name', models.CharField(max_length=256)),
                ('final', models.BooleanField()),
                ('date', models.DateTimeField()),
                ('identifier', models.CharField(max_length=256)),
                ('ordering', models.IntegerField(default=0)),
                ('comment', models.CharField(max_length=256)),
                ('excerpt', models.CharField(max_length=256)),
                ('address', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='institutions.AddressData')),
                ('case', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='cases.Case')),
                ('channel', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='channels.Channel')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
