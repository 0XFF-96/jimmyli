from collections import defaultdict, deque
import sys

class SatelliteNetwork:
    def __init__(self):
        self.satellites = set()
        self.connections = defaultdict(list)
        
    def satelliteConnected(self, satelliteID):
        if satelliteID in self.satellites:
            self.errDuplicateSatellite(satelliteID)
        else:
            self.satellites.add(satelliteID)
    
    def relationshipEstablished(self, satelliteID1, satelliteID2):
        if satelliteID1 not in self.satellites:
            self.errInvalidSatellite(satelliteID1)
            return
        if satelliteID2 not in self.satellites:
            self.errInvalidSatellite(satelliteID2)
            return
        
        self.connections[satelliteID1].append(satelliteID2)
        self.connections[satelliteID2].append(satelliteID1)
    
    def messageReceived(self, M, satelliteIDs):
        for satelliteID in satelliteIDs:
            if satelliteID not in self.satellites:
                self.errInvalidSatellite(satelliteID)
                return
        
        visited = set()
        queue = deque(satelliteIDs)  # 先按输入顺序处理初始卫星
        received = set(queue)
        
        while queue:
            current = queue.popleft()
            
            if current in visited:
                continue
            visited.add(current)
            self.onSatelliteReportedBack(current)
            
            for neighbor in self.connections[current]:  # 这里不排序，保持 BFS 先入先出的顺序
                if neighbor not in received:
                    queue.append(neighbor)
                    received.add(neighbor)
    
    def onSatelliteReportedBack(self, satelliteID):
        print(f"SatelliteReportedBack: {satelliteID}")
    
    def errDuplicateSatellite(self, satelliteID):
        print(f"Error: Duplicate satellite {satelliteID}", file=sys.stderr)
    
    def errInvalidSatellite(self, satelliteID):
        print(f"Error: Invalid satellite {satelliteID}", file=sys.stderr)

# 从标准输入读取命令
if __name__ == "__main__":
    network = SatelliteNetwork()
    n = int(sys.stdin.readline().strip())  # 读取第一行，表示有多少条命令
    
    for _ in range(n):
        command = sys.stdin.readline().strip().split()
        if command[0] == "SatelliteConnected":
            network.satelliteConnected(int(command[1]))
        elif command[0] == "RelationshipEstablished":
            network.relationshipEstablished(int(command[1]), int(command[2]))
        elif command[0] == "MessageReceived":
            network.messageReceived(int(command[1]), list(map(int, command[2:])))