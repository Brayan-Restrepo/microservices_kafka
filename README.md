

$ docker exec broker kafka-topics --bootstrap-server broker:9092 --create --topic test


kafka-topics --bootstrap-server 172.25.1.2:9092 --create --topic test
kafka-topics --list --bootstrap-server 172.25.1.2:9092
kafka-console-consumer --bootstrap-server 172.25.1.2:9092 --topic test
kafka-console-producer --broker-list 172.25.1.2:9092 --topic test

