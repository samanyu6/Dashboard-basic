import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black, bold } from 'ansi-colors';
import * as Progress from 'react-native-progress';
import { ScrollView } from 'react-native-gesture-handler';



export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }

  _handleProgress(text) {
    return '50'
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headertext}>Dashboard</Text>
        <Progress.Circle
          size={80}
          style={styles.progressBarTop}
           progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            color = {'#009688'}
        />
        <Text style={styles.LocationText}>Location Points</Text>

        <Progress.Circle
          size={80}
            style={styles.progressBar}
            progress={this.state.progress}
          indeterminate={this.state.indeterminate}
            color = {'#009688'}
        />
        <Text style={styles.ReferralText}>Referral Points</Text>

        <Progress.Circle
          size={80}
            style={styles.progressBar}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            color = {'#009688'}
        />
        <Text style={styles.DonationText}>Donation Points</Text> 

        <Progress.Circle
          size={80}
            style={styles.progressBar}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            color = {'#009688'}
        />
        <Text style={styles.ShareText}>Sharing Points</Text> 

        <Progress.Circle
          size={80}
            style={styles.progressBar}
            progress={this.state.progress}
            indeterminate={this.state.indeterminate}
            color = {'#009688'}
        />
        <Text style={styles.FeedbackText}>Feedback Points</Text> 
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
    backgroundColor: '#fff',
  },
  headertext: {
    position: 'relative',
    fontSize: 40,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginTop: 50,
  },
  progressBarTop: {
   position: 'relative',
    alignContent: 'center',
    paddingTop: 50,
    paddingLeft: 20
  },
  progressBar: {
    position: 'relative',
    alignContent: 'center',
    paddingTop: 50,
    paddingLeft: 20

  },
  LocationText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 140,
    paddingTop: 170
  },
  ReferralText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 140,
    paddingTop: 300
  },
  DonationText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 140,
    paddingTop: 430
  },
  ShareText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 140,
    paddingTop: 560
  },
  FeedbackText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 140,
    paddingTop: 690
  },

});
