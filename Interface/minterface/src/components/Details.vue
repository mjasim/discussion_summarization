<template>
  <v-container fluid fill-height>
    <v-layout column justify-start>
      <v-flex id="fullcontainer">
        <v-flex style="height: 45vh; overflow-y:auto; margin-bottom: 1%">
          <div id="topicOverview">
            <v-flex>
              <v-layout>
                <v-flex row>
                  <v-col cols="12" sm="6">
                    <v-select
                      label="Select a Proposal"
                      v-model="default_selected"
                      :items="all_proposals"
                      item-text="text"
                      item-value="value"
                      @change="changedProposal"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div>
                      <v-layout id="heatmapHeader" row justify-end>
                        <template v-for="(i, index) in discourses">
                          <span
                            :key="index"
                            style="width: 40px; height: 30px; margin-top: 5%; margin-right: 1%; -webkit-transform: rotate(-55deg); -moz-transform: rotate(-55deg); font-size: 12px"
                          >{{i}}</span>
                        </template>
                      </v-layout>
                    </div>
                  </v-col>
                </v-flex>
              </v-layout>
              <v-layout>
                <div style="width: 15%; padding-left: 9.5%">
                  <b>Topic</b>
                </div>
                <div style="width: 45%; padding-left:11%">
                  <b>Topic Keywords</b>
                </div>
                <div style="width: 40%; padding-right:3%">
                  <v-layout id="heatmapbox" row justify-end>
                    <!-- <template v-for="(item, index) in proposal_data.discourses">
                      <v-tooltip bottom :key="index">
                        <template v-slot:activator="{on}">
                          <v-btn
                            v-on="on"
                            depressed
                            tile
                            style="margin-left:1%; margin-right:1px; height:40px; min-width: 40px; border: solid thin lightgray; width:40px; padding: 0px;"
                            :color="item.color"
                            @click="discourseBoxSelected(index)"
                          ></v-btn>
                        </template>
                        <span>{{ item.count }}</span>
                      </v-tooltip>
                    </template>-->
                  </v-layout>
                </div>
              </v-layout>
              <v-layout column>
                <template v-for="item in proposal_data.topics">
                  <v-hover v-slot:default="{ hover }" open-delay="0" :key="item.topic_phrase">
                    <v-card :elevation="hover ? 16 : 1" light style="margin: 5px">
                      <v-card-title flat style="padding: 2px">
                        <div style="width: 25%; margin-right: 1%">
                          <v-layout row>
                            <v-layout id="topics" align-center justify-end style="width: 20%">
                              <v-tooltip bottom :key="item.topic_phrase">
                                <template v-slot:activator="{on}">
                                  <v-btn
                                    depressed
                                    v-on="on"
                                    x-small
                                    :id="item.topic_phrase"
                                    @click="topicSelected(item.topic_phrase)"
                                    :width="item.topic_sent_count * 10"
                                    style="background-color: #2c485b;"
                                  ></v-btn>
                                </template>
                                <span>{{ item.topic_sent_count }}</span>
                              </v-tooltip>
                            </v-layout>
                            <v-layout justify-start style="width:50%">
                              <v-btn
                                depressed
                                text
                                :id="item.topic_phrase"
                                @click="topicSelected(item.topic_phrase)"
                              >
                                <span
                                  style="max-width: 200px; white-space:nowrap; overflow:hidden; text-overflow: ellipsis"
                                >{{ item.topic_phrase }}</span>
                              </v-btn>
                            </v-layout>
                          </v-layout>
                        </div>
                        <div style="width: 40%; margin-right:1.2%">
                          <v-layout id="topics" row justify-start>
                            <template v-for="(kws, index) in item.topic_keywords" v-if="index < 6">
                              <v-btn
                                depressed
                                outlined
                                small
                                style="border-color: lightgray; margin: 1px"
                                :id="item.topic_phrase + '_' + index"
                                :key="index"
                                @click="keywordSelected(item.topic_phrase, item.topic_keywords[index])"
                              >{{ item.topic_keywords[index] }}</v-btn>
                            </template>
                          </v-layout>
                        </div>
                        <div style="width: 30%;">
                          <v-layout id="fabBox" row justify-start>
                            <template v-for="(i, index) in item.topic_discourses">
                              <v-tooltip bottom :key="index">
                                <template v-slot:activator="{on}">
                                  <v-layout
                                    align-center
                                    justify-center
                                    style="margin-left:1%; margin-right:1px; height:40px; min-width: 40px; width:40px; padding: 0px;"
                                  >
                                    <v-btn
                                      v-on="on"
                                      depressed
                                      fab
                                      :width="(i.count / item.topic_sent_count) * 40"
                                      :height="(i.count / item.topic_sent_count) * 40"
                                      style="margin-left:1%; margin-right:1px; border: solid thin lightgray; padding: 0px;"
                                      :color="i.color"
                                      @click="discourseSelected(item, i)"
                                    ></v-btn>
                                  </v-layout>
                                </template>
                                <span>{{ i.count }}</span>
                              </v-tooltip>
                            </template>
                          </v-layout>
                        </div>
                      </v-card-title>
                    </v-card>
                  </v-hover>
                </template>
              </v-layout>
            </v-flex>
          </div>
        </v-flex>
        <v-flex
          style="height: 45vh; overflow-x: hidden; overflow-y:auto; border-top: solid thin #2c485b"
        >
          <div style="margin-top: 1%;margin-bottom:1%;">
            <v-flex v-for="(item, index) in filtered_data" :key="'comment' + index">
              <v-hover v-slot:default="{ hover }" open-delay="0" :key="item.topic_phrase">
                <v-card :elevation="hover ? 16 : 1" light style="margin: 5px; padding: 5px">
                  <v-layout column>
                    <v-layout row>
                      <v-layout column style="width: 10%; margin-right: 1%; color: #2c485b">
                        <v-layout justify-end>
                          <b>{{item.discourse}}</b>
                        </v-layout>
                      </v-layout>
                      <v-layout column style="width: 85%;margin-right: 1%">
                        <span>{{item.comment}}</span>
                        <span>
                          <v-icon>subdirectory_arrow_right</v-icon>
                          {{item.related_to}}
                        </span>
                      </v-layout>
                    </v-layout>
                  </v-layout>
                </v-card>
              </v-hover>
            </v-flex>
          </div>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Detils",
  data: () => ({
    selected_proposal: localStorage.getItem("proposal"),
    discourses: [
      "Question",
      "Answer",
      "Announcement",
      "Elaboration",
      "Appreciation",
      "Agreement",
      "Disagreement",
      "Negative_reaction",
      "Humor",
      "Other"
    ],
    default_selected: {
      text: localStorage.getItem("proposal"),
      value: localStorage.getItem("proposal")
    },
    details_data: [],
    all_proposals: [],
    proposal_data: [],
    selected_topic: null,
    selected_keyword: null,
    selected_discourse: null,
    filtered_data: []
  }),
  methods: {
    filterData() {
      this.filtered_data = [];

      console.log(
        "filtering on ",
        this.selected_proposal,
        " ",
        this.selected_topic,
        " ",
        this.selected_keyword,
        " ",
        this.selected_discourse
      );
      for (var i in this.details_data) {
        if (this.details_data[i].discussion_name == this.selected_proposal) {
          this.proposal_data = this.details_data[i];
        }
      }
      console.log(this.proposal_data);

      for (var i in this.proposal_data.comments) {
        if (this.selected_topic == this.proposal_data.comments[i].topic_phrase) {
          if (this.selected_keyword) {
            if (this.proposal_data.comments[i].lemmas.includes(this.selected_keyword) || this.proposal_data.comments[i].comment.includes(this.selected_keyword)) {
              var comment_piece = {
                comment: this.proposal_data.comments[i].comment,
                related_to: this.proposal_data.comments[i].related_to,
                discourse: this.proposal_data.comments[i].discourse
              };
              this.filtered_data.push(comment_piece);
            }
          } else {
            var comment_piece = {
              comment: this.proposal_data.comments[i].comment,
              related_to: this.proposal_data.comments[i].related_to,
              discourse: this.proposal_data.comments[i].discourse
            };
            this.filtered_data.push(comment_piece);
          }
        }
      }

      if(this.selected_discourse){
        var temp_data = this.filtered_data
        this.filtered_data = []
        for (var i in temp_data){
          if(temp_data[i].discourse == this.selected_discourse){
            this.filtered_data.push(temp_data[i])
          }
        }
        this.selected_discourse = null;
      }

      var temp_filtered_data = this.filtered_data
      this.filtered_data = []
      for(var i in this.discourses){
        for (var j in temp_filtered_data){
          if(this.discourses[i].toLowerCase() == temp_filtered_data[j].discourse){
            this.filtered_data.push(temp_filtered_data[j])
          }
        }
      }

      console.log(this.filtered_data);
    },

    topicSelected(topic_phrase) {
      this.selected_topic = topic_phrase;
      this.selected_keyword = null;
      this.filterData();
    },

    keywordSelected(topic_phrase, topic_keyword) {
      this.selected_keyword = topic_keyword;
      this.selected_topic = topic_phrase;
      this.filterData();
    },

    discourseSelected(item, i) {
      this.selected_discourse = i.discourse_name
      this.selected_topic = item.topic_phrase
      this.filterData()
    },

    changedProposal: function(label) {
      this.selected_proposal = label;
      this.filterData();
    },

    fetchData() {
      axios.get("/" + "mat_data_cc.json").then(response => {
        this.details_data = response.data;
        for (var i in this.details_data) {
          this.all_proposals.push({
            text: this.details_data[i].discussion_name,
            value: this.details_data[i].discussion_name
          });
        }
        this.filterData();
      });
    }
  },

  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.v-btn {
  min-width: 0;
}
</style>