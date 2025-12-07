from rest_framework import generics
from sales.models import Transaction
from sales.serializers import TransactionSerializer

class TransactionListView(generics.ListAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
